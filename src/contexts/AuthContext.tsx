import { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import api from '../services/api'
import { User, AuthContextType, AuthResponse, UserRole, BackendRole } from '../types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')
    
    if (token && savedUser) {
      setIsAuthenticated(true)
      setUser(JSON.parse(savedUser) as User)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    setLoading(false)
  }, [])

  const mapBackendRoleToFrontend = (backendRole: BackendRole): UserRole => {
    if (backendRole === 'student') return 'aluno'
    if (backendRole === 'teacher') return 'professor'
    return 'professor'
  }

  const mapBackendUserToUser = (backendUser: AuthResponse['data']['user']): User => {
    return {
      id: backendUser.id,
      name: backendUser.name,
      email: backendUser.email,
      role: mapBackendRoleToFrontend(backendUser.role)
    }
  }

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await api.post<AuthResponse>('/auth/login', { email, password })
      
      if (response.data.success && response.data.data) {
        const { accessToken, user: backendUser } = response.data.data
        const user = mapBackendUserToUser(backendUser)
        
        localStorage.setItem('token', accessToken)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)
        localStorage.setItem('user', JSON.stringify(user))
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        
        setIsAuthenticated(true)
        setUser(user)
        
        return { success: true }
      } else {
        return {
          success: false,
          error: 'Resposta inválida do servidor'
        }
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || error.response?.data?.error || 'Erro ao fazer login'
      }
    }
  }

  const register = async (name: string, email: string, password: string, role: UserRole): Promise<{ success: boolean; error?: string }> => {
    try {
      const backendRole: BackendRole = role === 'aluno' ? 'student' : 'teacher'
      
      const response = await api.post<AuthResponse>('/auth/register', { 
        name, 
        email, 
        password, 
        role: backendRole 
      })
      
      if (response.data.success && response.data.data) {
        const { accessToken, user: backendUser } = response.data.data
        const user = mapBackendUserToUser(backendUser)
        
        localStorage.setItem('token', accessToken)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)
        localStorage.setItem('user', JSON.stringify(user))
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        
        setIsAuthenticated(true)
        setUser(user)
        
        return { success: true }
      } else {
        return {
          success: false,
          error: 'Resposta inválida do servidor'
        }
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || error.response?.data?.error || 'Erro ao criar conta'
      }
    }
  }

  const logout = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    delete api.defaults.headers.common['Authorization']
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

