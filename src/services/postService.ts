import api from './api'
import { Post, PostFormData, PostsResponse, ApiResponse } from '../types'

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<ApiResponse<PostsResponse>>('/posts')
  if (response.data.success && response.data.data) {
    return response.data.data.data || []
  }
  return []
}

export const getPostsPaginated = async (page: number = 1, limit: number = 10): Promise<PostsResponse> => {
  const response = await api.get<ApiResponse<PostsResponse>>(`/posts?page=${page}&limit=${limit}`)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  return { data: [], total: 0, page, limit, totalPages: 0 }
}

export const getPostById = async (id: number | string): Promise<Post> => {
  const response = await api.get<ApiResponse<Post>>(`/posts/${id}`)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  throw new Error('Post não encontrado')
}

export const searchPosts = async (query: string, page: number = 1, limit: number = 10): Promise<PostsResponse> => {
  const response = await api.get<ApiResponse<PostsResponse>>(`/posts/search?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  return { data: [], total: 0, page, limit, totalPages: 0 }
}

export const getAllPosts = async (page: number = 1, limit: number = 20): Promise<PostsResponse> => {
  const response = await api.get<ApiResponse<PostsResponse>>(`/posts/all?page=${page}&limit=${limit}`)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  return { data: [], total: 0, page, limit, totalPages: 0 }
}

export const createPost = async (postData: PostFormData): Promise<Post> => {
  const response = await api.post<ApiResponse<Post>>('/posts', postData)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  throw new Error('Erro ao criar post')
}

export const updatePost = async (id: number | string, postData: PostFormData): Promise<Post> => {
  const response = await api.patch<ApiResponse<Post>>(`/posts/${id}`, postData)
  if (response.data.success && response.data.data) {
    return response.data.data
  }
  throw new Error('Erro ao atualizar post')
}

export const deletePost = async (id: number | string): Promise<void> => {
  await api.delete(`/posts/${id}`)
}

