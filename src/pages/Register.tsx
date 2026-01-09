import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  PrimaryButton,
  ErrorMessage,
  Text
} from '../styles/GlobalStyles'
import { RegisterContainer, RegisterForm, RegisterCard } from '../styles/RegisterStyles'
import { RegisterFormData, UserRole } from '../types'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'aluno' as UserRole
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim() || !formData.role) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    try {
      setLoading(true)
      const result = await register(formData.name, formData.email, formData.password, formData.role)
      
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Erro ao criar conta. Tente novamente.')
      }
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="animate-fade-in">
      <RegisterContainer>
        <RegisterCard className="animate-slide-up hover:shadow-2xl transition-shadow duration-300">
          <Title className="animate-fade-in">Cadastro</Title>
          <RegisterForm onSubmit={handleSubmit}>
            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <Label htmlFor="role">Tipo de Conta</Label>
              <Select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              >
                <option value="aluno">Aluno</option>
                <option value="professor">Professor</option>
              </Select>
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo de 6 caracteres"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Digite a senha novamente"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            {error && <ErrorMessage className="animate-fade-in">{error}</ErrorMessage>}

            <PrimaryButton 
              type="submit" 
              disabled={loading} 
              style={{ width: '100%', marginBottom: '16px' }}
              className="hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 animate-pulse-slow"
            >
              {loading ? 'Criando conta...' : 'Criar Conta'}
            </PrimaryButton>

            <Text style={{ textAlign: 'center', marginTop: '16px' }}>
              Já tem uma conta?{' '}
              <Link 
                to="/login" 
                className="text-orange hover:text-orange-600 font-semibold transition-colors duration-300"
                style={{ textDecoration: 'none' }}
              >
                Faça login
              </Link>
            </Text>
          </RegisterForm>
        </RegisterCard>
      </RegisterContainer>
    </Container>
  )
}

export default Register
