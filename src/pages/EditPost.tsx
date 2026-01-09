import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPostById, updatePost } from '../services/postService'
import {
  Container,
  Title,
  Card,
  FormGroup,
  Label,
  Input,
  TextArea,
  PrimaryButton,
  SecondaryButton,
  ErrorMessage,
  SuccessMessage,
  Text
} from '../styles/GlobalStyles'
import { FormActions, BackLink } from '../styles/FormStyles'
import { PostFormData, PostStatus } from '../types'

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    tags: [],
    published: false,
    status: 'draft'
  })
  const [tagsInput, setTagsInput] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingPost, setLoadingPost] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      loadPost()
    }
  }, [id])

  const loadPost = async (): Promise<void> => {
    if (!id) return
    
    try {
      setLoadingPost(true)
      const post = await getPostById(id)
      const postStatus = post.status || 'draft'
      setFormData({
        title: post.title || '',
        content: post.content || '',
        tags: post.tags || [],
        published: postStatus === 'published',
        status: postStatus
      })
      setTagsInput(post.tags ? post.tags.join(', ') : '')
      setError(null)
    } catch (err) {
      setError('Erro ao carregar post. Tente novamente mais tarde.')
      console.error(err)
    } finally {
      setLoadingPost(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    
    if (name === 'status') {
      setFormData(prev => ({
        ...prev,
        [name]: value as PostStatus,
        published: value === 'published'
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    setError(null)
  }

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setTagsInput(value)
    const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    setFormData(prev => ({
      ...prev,
      tags: tagsArray
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!id) return
    
    setError(null)
    setSuccess(false)

    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    try {
      setLoading(true)
      const postData: PostFormData = {
        title: formData.title,
        content: formData.content,
        tags: formData.tags && formData.tags.length > 0 ? formData.tags : undefined,
        published: formData.published,
        status: formData.status
      }
      
      await updatePost(id, postData)
      setSuccess(true)
      setTimeout(() => {
        navigate('/admin')
      }, 2000)
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Erro ao atualizar post. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loadingPost) {
    return (
      <Container>
        <Card>
          <Text>Carregando post...</Text>
        </Card>
      </Container>
    )
  }

  return (
    <Container className="animate-fade-in">
      <BackLink>
        <Link to="/admin" className="hover:scale-105 hover:text-orange transition-all duration-300 inline-flex items-center gap-2">← Voltar</Link>
      </BackLink>
      
      <Title className="animate-slide-up">Editar Publicação</Title>
      
      <Card className="animate-slide-up hover:shadow-2xl transition-shadow duration-300">
        <form onSubmit={handleSubmit}>
          <FormGroup className="animate-fade-in">
            <Label htmlFor="title">Título</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Digite o título do post"
              required
              className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
            />
          </FormGroup>

          <FormGroup className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Label htmlFor="content">Conteúdo</Label>
            <TextArea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Digite o conteúdo do post"
              required
              className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
            />
          </FormGroup>

          <FormGroup className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
            <Input
              type="text"
              id="tags"
              name="tags"
              value={tagsInput}
              onChange={handleTagsChange}
              placeholder="Ex: educação, tecnologia, aprendizado"
              className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
            />
          </FormGroup>

          <FormGroup className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status || 'draft'}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
            >
              <option value="draft">Rascunho</option>
              <option value="published">Publicado</option>
              <option value="private">Privado</option>
            </select>
          </FormGroup>

          {error && <ErrorMessage className="animate-fade-in">{error}</ErrorMessage>}
          {success && <SuccessMessage className="animate-fade-in">Post atualizado com sucesso! Redirecionando...</SuccessMessage>}

          <FormActions className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SecondaryButton 
              type="button" 
              onClick={() => navigate('/admin')}
              className="hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Voltar
            </SecondaryButton>
            <PrimaryButton 
              type="submit" 
              disabled={loading}
              className="hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </PrimaryButton>
          </FormActions>
        </form>
      </Card>
    </Container>
  )
}

export default EditPost

