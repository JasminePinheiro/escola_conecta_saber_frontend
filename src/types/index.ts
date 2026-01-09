export type UserRole = 'aluno' | 'professor'
export type BackendRole = 'student' | 'teacher' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

export interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
}

export type PostStatus = 'published' | 'draft' | 'private'

export interface Post {
  id: string | number
  title: string
  author: string
  content: string
  description?: string
  tags?: string[]
  published?: boolean
  status?: PostStatus
  scheduledAt?: string
  createdAt?: string
  updatedAt?: string
  comments?: Comment[]
}

export interface PostFormData {
  title: string
  content: string
  description?: string
  tags?: string[]
  published?: boolean
  status?: PostStatus
  scheduledAt?: string
}

export interface PostsResponse {
  data: Post[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  timestamp: string
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: UserRole
}

export interface BackendUser {
  id: string
  email: string
  name: string
  role: BackendRole
  isActive: boolean
  lastLogin?: string
  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  success: boolean
  data: {
    user: BackendUser
    accessToken: string
    refreshToken: string
  }
  timestamp: string
}

export interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  setUser?: (user: User | null) => void
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (name: string, email: string, password: string, role: UserRole) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  loading: boolean
}

