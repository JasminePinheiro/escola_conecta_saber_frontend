import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  PrimaryButton,
  ErrorMessage,
  Text
} from '../styles/GlobalStyles'
import { LoginContainer, LoginForm, LoginCard } from '../styles/LoginStyles'
import { LoginFormData } from '../types'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    try {
      setLoading(true)
      const result = await login(formData.email, formData.password)
      
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Erro ao fazer login. Verifique suas credenciais.')
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="animate-fade-in">
      <LoginContainer>
        <LoginCard className="animate-slide-up hover:shadow-2xl transition-shadow duration-300">
          <Title className="animate-fade-in">Login</Title>
          <LoginForm onSubmit={handleSubmit}>
            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
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

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Digite sua senha"
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
              {loading ? 'Entrando...' : 'Entrar'}
            </PrimaryButton>

            <Text style={{ textAlign: 'center', marginTop: '16px' }}>
              Não tem uma conta?{' '}
              <Link 
                to="/register" 
                className="text-orange hover:text-orange-600 font-semibold transition-colors duration-300"
                style={{ textDecoration: 'none' }}
              >
                Cadastre-se
              </Link>
            </Text>
          </LoginForm>
        </LoginCard>
      </LoginContainer>
    </Container>
  )
}

export default Login

