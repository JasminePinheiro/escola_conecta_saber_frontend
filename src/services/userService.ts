import api from './api'
import { ApiResponse, User, BackendUser, UserRole, BackendRole } from '../types'

export interface UpdateProfileData {
  name: string
  email: string
}

export interface ChangePasswordData {
  currentPassword: string
  newPassword: string
}

interface UpdateProfileResponse {
  success: boolean
  data: BackendUser
  timestamp: string
}

const mapBackendRoleToFrontend = (backendRole: BackendRole): UserRole => {
  if (backendRole === 'student') return 'aluno'
  if (backendRole === 'teacher') return 'professor'
  return 'professor'
}

const mapBackendUserToUser = (backendUser: BackendUser): User => {
  return {
    id: backendUser.id,
    name: backendUser.name,
    email: backendUser.email,
    role: mapBackendRoleToFrontend(backendUser.role)
  }
}

export const updateProfile = async (profileData: UpdateProfileData): Promise<User> => {
  const response = await api.patch<UpdateProfileResponse>('/auth/profile', profileData)
  if (response.data.success && response.data.data) {
    const user = mapBackendUserToUser(response.data.data)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }
  throw new Error('Erro ao atualizar perfil')
}

export const changePassword = async (passwordData: ChangePasswordData): Promise<void> => {
  const response = await api.patch<ApiResponse<{ message: string }>>('/auth/change-password', passwordData)
  if (!response.data.success) {
    throw new Error('Erro ao alterar senha')
  }
}

