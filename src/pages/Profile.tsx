import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { updateProfile, changePassword, UpdateProfileData, ChangePasswordData } from '../services/userService'
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  PrimaryButton,
  ErrorMessage,
  Text,
  colors
} from '../styles/GlobalStyles'
import {
  ProfileContainer,
  ProfileCard,
  ProfileForm,
  SectionTitle,
  SectionDivider,
  SuccessMessage,
  RequiredAsterisk,
  FormLegend
} from '../styles/ProfileStyles'

const Profile: React.FC = () => {
  const { user, setUser } = useAuth()
  const [profileData, setProfileData] = useState<UpdateProfileData>({
    name: '',
    email: ''
  })
  const [passwordData, setPasswordData] = useState<ChangePasswordData>({
    currentPassword: '',
    newPassword: ''
  })
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        email: user.email
      })
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    
    if (name === 'confirmPassword') {
      setConfirmPassword(value)
    } else if (name === 'currentPassword' || name === 'newPassword') {
      setPasswordData(prev => ({
        ...prev,
        [name]: value
      }))
    } else {
      setProfileData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    setError(null)
    setSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!profileData.name.trim() || !profileData.email.trim()) {
      setError('Por favor, preencha nome e email.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(profileData.email)) {
      setError('Por favor, insira um email válido.')
      return
    }

    const hasPasswordFields = passwordData.currentPassword.trim() || passwordData.newPassword.trim() || confirmPassword.trim()
    
    if (hasPasswordFields) {
      if (!passwordData.currentPassword.trim() || !passwordData.newPassword.trim() || !confirmPassword.trim()) {
        setError('Para alterar a senha, preencha todos os campos de senha.')
        return
      }

      if (passwordData.newPassword.length < 6) {
        setError('A nova senha deve ter pelo menos 6 caracteres.')
        return
      }

      if (passwordData.newPassword !== confirmPassword) {
        setError('As senhas não coincidem.')
        return
      }

      if (passwordData.currentPassword === passwordData.newPassword) {
        setError('A nova senha deve ser diferente da senha atual.')
        return
      }
    }

    try {
      setLoading(true)
      
      if (hasPasswordFields) {
        try {
          await changePassword(passwordData)
          
          setPasswordData({
            currentPassword: '',
            newPassword: ''
          })
          setConfirmPassword('')
        } catch (passwordErr: any) {
          throw {
            response: {
              data: {
                message: passwordErr.response?.data?.message || passwordErr.response?.data?.error || 'Senha atual incorreta. Verifique e tente novamente.',
                error: passwordErr.response?.data?.error || 'Erro ao alterar senha'
              }
            }
          }
        }
      }
      
      const updatedUser = await updateProfile(profileData)
      
      if (setUser) {
        setUser(updatedUser)
      }
      
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (err: any) {
      setError(
        err.response?.data?.message || 
        err.response?.data?.error || 
        'Erro ao salvar alterações. Tente novamente.'
      )
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    )
  }

  return (
    <Container className="animate-fade-in">
      <ProfileContainer>
        <ProfileCard>
          <Title>Meu Perfil</Title>
          
          <ProfileForm onSubmit={handleSubmit}>
            <SectionTitle>Informações Pessoais</SectionTitle>
            
            {success && (
              <SuccessMessage>
                Alterações salvas com sucesso!
              </SuccessMessage>
            )}
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <FormGroup>
              <Label htmlFor="name">
                Nome
                <RequiredAsterisk>*</RequiredAsterisk>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">
                Email
                <RequiredAsterisk>*</RequiredAsterisk>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </FormGroup>

            <SectionDivider />

            <SectionTitle>Alterar Senha</SectionTitle>
            
            <FormGroup>
              <Label htmlFor="currentPassword">Senha Atual</Label>
              <Input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handleChange}
                disabled={loading}
                placeholder="Deixe em branco para não alterar"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="newPassword">Nova Senha</Label>
              <Input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handleChange}
                disabled={loading}
                minLength={6}
                placeholder="Deixe em branco para não alterar"
              />
              <Text style={{ fontSize: '12px', color: colors.textGray, marginTop: '4px' }}>
                A senha deve ter pelo menos 6 caracteres
              </Text>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                disabled={loading}
                minLength={6}
                placeholder="Deixe em branco para não alterar"
              />
            </FormGroup>
            
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </PrimaryButton>
            
            <FormLegend>
              <RequiredAsterisk>*</RequiredAsterisk>
              Campos obrigatórios
            </FormLegend>
          </ProfileForm>
        </ProfileCard>
      </ProfileContainer>
    </Container>
  )
}

export default Profile
