import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllPosts, deletePost } from '../services/postService'
import { useAuth } from '../contexts/AuthContext'
import {
  Container,
  Title,
  Card,
  Text,
  SecondaryButton,
  DangerButton,
  PrimaryButton,
  Input,
  FormGroup
} from '../styles/GlobalStyles'
import { AdminBanner, AdminGrid, AdminCard, AdminCardTitle, AdminCardDescription, AdminCardDate, AdminCardAuthor, AdminCardActions, SearchBar, CreateButtonContainer } from '../styles/AdminStyles'
import { Post } from '../types'
import { colors } from '../styles/GlobalStyles'
import iconSearch from '../images/icon-search.svg'
import iconUser from '../images/icon-user.svg'
import iconCalendar from '../images/icon-calendar.svg'

const Admin: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [allPosts, setAllPosts] = useState<Post[]>([]) // Todos os posts carregados
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]) // Posts filtrados pela busca
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | number | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const postsPerPage = 20

  useEffect(() => {
    if (user && user.role !== 'professor') {
      navigate('/')
    }
  }, [user, navigate])

  const filterPrivatePosts = useCallback((posts: Post[]): Post[] => {
    if (!user) {
      return []
    }
    
    return posts.filter(post => {
      if (post.status !== 'private') {
        return true
      }

      const postAuthor = (post.author || '').trim().toLowerCase()
      const userName = (user.name || '').trim().toLowerCase()
      
      if (post.status === 'private') {
        console.log('Verificando post privado:', {
          postId: post.id,
          postTitle: post.title,
          postAuthor,
          userName,
          match: postAuthor === userName
        })
      }
      
      return postAuthor === userName
    })
  }, [user])

  const loadPosts = useCallback(async (page: number = 1): Promise<void> => {
    if (!user) {
      setAllPosts([])
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      
      const result = await getAllPosts(page, 50)
      
      if (result && result.data && Array.isArray(result.data)) {
        const filteredByPrivacy = filterPrivatePosts(result.data)
        console.log('Posts carregados:', {
          total: result.data.length,
          filtrados: filteredByPrivacy.length,
          usuario: user.name,
          postsPrivados: result.data.filter(p => p.status === 'private').length
        })
        setAllPosts(filteredByPrivacy)
        const calculatedTotalPages = Math.ceil(filteredByPrivacy.length / postsPerPage)
        setTotalPages(calculatedTotalPages || 1)
        setCurrentPage(1)
      } else {
        setAllPosts([])
        if (result && !result.data) {
          console.warn('API retornou resposta sem dados:', result)
          setError('A API retornou uma resposta sem dados.')
        }
      }
    } catch (err: any) {
      console.error('Erro ao carregar posts:', err)
      console.error('Detalhes do erro:', {
        message: err?.message,
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
        url: err?.config?.url
      })
      
      if (err?.response?.status === 401) {
        setError('Sessão expirada. Redirecionando...')
        return
      }
      
      if (err?.response?.status === 404) {
        setError('Endpoint não encontrado. Verifique se o endpoint /posts/all está disponível na API.')
        setAllPosts([])
        return
      }
      
      setAllPosts([])
      const errorMessage = err?.response?.data?.message || 
                          err?.response?.data?.error || 
                          err?.message || 
                          'Não foi possível carregar os posts da API.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [postsPerPage, filterPrivatePosts, user])

  const filterPosts = useCallback((posts: Post[], term: string): Post[] => {
    if (!term.trim()) {
      return posts
    }

    const searchLower = term.toLowerCase().trim()
    return posts.filter(post => {
      const titleMatch = post.title?.toLowerCase().includes(searchLower) || false
      const descriptionMatch = post.description?.toLowerCase().includes(searchLower) || false
      const contentMatch = post.content?.toLowerCase().includes(searchLower) || false
      const authorMatch = post.author?.toLowerCase().includes(searchLower) || false
      const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchLower)) || false
      
      return titleMatch || descriptionMatch || contentMatch || authorMatch || tagsMatch
    })
  }, [])

  const filterPostsWithPrivacy = useCallback((posts: Post[], term: string): Post[] => {
    const privacyFiltered = filterPrivatePosts(posts)
    if (!term.trim()) {
      return privacyFiltered
    }
    return filterPosts(privacyFiltered, term)
  }, [filterPrivatePosts, filterPosts])

  useEffect(() => {
    if (user) {
      loadPosts(1)
    }
  }, [loadPosts, user])

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const filtered = filterPostsWithPrivacy(allPosts, searchTerm)
      setFilteredPosts(filtered)
      setCurrentPage(1)
      const calculatedTotalPages = Math.ceil(filtered.length / postsPerPage)
      setTotalPages(calculatedTotalPages || 1)
    }, 500)

    return () => clearTimeout(delayDebounce)
  }, [searchTerm, allPosts, filterPostsWithPrivacy])

  const displayedPosts = React.useMemo(() => {
    const postsToShow = searchTerm.trim() ? filteredPosts : allPosts
    const privacyFiltered = filterPrivatePosts(postsToShow)
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    return privacyFiltered.slice(startIndex, endIndex)
  }, [searchTerm, filteredPosts, allPosts, currentPage, postsPerPage, filterPrivatePosts])

  useEffect(() => {
    const postsToShow = searchTerm.trim() ? filteredPosts : allPosts
    const calculatedTotalPages = Math.ceil(postsToShow.length / postsPerPage)
    setTotalPages(calculatedTotalPages || 1)
  }, [filteredPosts, allPosts, searchTerm, postsPerPage])

  const handleEdit = (id: string | number): void => {
    navigate(`/edit-post/${id}`)
  }

  const handleDelete = async (id: string | number): Promise<void> => {
    if (!window.confirm('Tem certeza que deseja excluir este post?')) {
      return
    }

    try {
      setDeletingId(id)
      await deletePost(id)
      await loadPosts(1)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao excluir post.')
      console.error('Erro ao excluir post:', err)
    } finally {
      setDeletingId(null)
    }
  }

  if (loading && allPosts.length === 0) {
    return (
      <Container>
        <Text>Carregando posts...</Text>
      </Container>
    )
  }

  return (
    <>
      <AdminBanner>
        <Container>
          <div className="animate-slide-up">
            <Title style={{ marginBottom: '16px', color: colors.textDark }}>Gerenciar Publicações</Title>
            <Text style={{ marginBottom: '32px', color: colors.textGray, fontSize: '16px' }}>
              Gerencie seus posts e conteúdo educacional
            </Text>
            
            <CreateButtonContainer>
              <PrimaryButton 
                onClick={() => navigate('/create-post')}
                className="hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse-slow"
              >
                + Criar Novo Post
              </PrimaryButton>
            </CreateButtonContainer>
          </div>
        </Container>
      </AdminBanner>

      <Container className="animate-fade-in">
        <SearchBar className="animate-fade-in">
          <FormGroup style={{ position: 'relative', margin: '0 auto', maxWidth: '600px' }}>
            <Input
              type="text"
              placeholder="Buscar posts por título, descrição, autor ou tags"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '45px' }}
              className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-textGray text-lg pointer-events-none hover:scale-110 transition-transform duration-300"><img src={iconSearch} alt="search" /></span>
          </FormGroup>
        </SearchBar>

        <Text style={{ textAlign: 'center', marginBottom: '40px', color: colors.textGray, fontSize: '15px' }} className="animate-fade-in">
          Selecione um post para editar ou excluir seu conteúdo
        </Text>
        
        {error && (
          <Card>
            <Text style={{ color: colors.errorRed }}>{error}</Text>
          </Card>
        )}

        {!error && (
          <>
            {displayedPosts.length === 0 ? (
              <Card>
                <Text>
                  {searchTerm.trim() 
                    ? `Nenhum post encontrado com o termo "${searchTerm}"` 
                    : 'Nenhum post encontrado.'}
                </Text>
              </Card>
            ) : (
          <>
            {searchTerm.trim() && (
              <Text style={{ textAlign: 'center', marginBottom: '16px', color: colors.textGray, fontSize: '14px' }}>
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'} com o termo "{searchTerm}"
              </Text>
            )}
            <AdminGrid>
              {displayedPosts.map((post, index) => (
                <AdminCard 
                  key={post.id}
                  onClick={() => navigate(`/post/${post.id}`)}
                  className="cursor-pointer animate-slide-up hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-orange"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AdminCardTitle className="group-hover:text-orange transition-colors duration-300">
                    {post.title}
                  </AdminCardTitle>
                  <AdminCardDescription className="group-hover:text-textDark transition-colors duration-300">
                    {post.description || (post.content?.substring(0, 120) + '...')}
                  </AdminCardDescription>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    {post.status && (
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: post.status === 'published' ? colors.successGreen : 
                                   post.status === 'draft' ? colors.warningYellow : colors.grayMedium,
                        color: colors.white
                      }}>
                        {post.status === 'published' ? 'Publicado' :
                         post.status === 'draft' ? 'Rascunho' : 'Privado'}
                      </span>
                    )}
                    {post.tags && post.tags.length > 0 && post.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        background: colors.grayLighter,
                        color: colors.grayMediumDark
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <AdminCardAuthor className="group-hover:scale-105 transition-transform duration-300">
                    <img src={iconUser} alt="user" /> {post.author || 'Autor não informado'}
                  </AdminCardAuthor>
                  <AdminCardDate className="group-hover:scale-105 transition-transform duration-300">
                    <img src={iconCalendar} alt="calendar" /> {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })
                      : '-'}
                  </AdminCardDate>
                  <AdminCardActions>
                    <SecondaryButton
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEdit(post.id)
                      }}
                      style={{ flex: 1 }}
                      className="hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Editar
                    </SecondaryButton>
                    <DangerButton
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(post.id)
                      }}
                      disabled={deletingId === post.id}
                      style={{ flex: 1 }}
                      className="hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {deletingId === post.id ? 'Excluindo...' : 'Excluir'}
                    </DangerButton>
                  </AdminCardActions>
                </AdminCard>
              ))}
            </AdminGrid>
            
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                <SecondaryButton
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1))
                  }}
                  disabled={currentPage === 1}
                  className="hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Anterior
                </SecondaryButton>
                <Text style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                  Página {currentPage} de {totalPages}
                </Text>
                <SecondaryButton
                  onClick={() => {
                    setCurrentPage(prev => Math.min(totalPages, prev + 1))
                  }}
                  disabled={currentPage === totalPages}
                  className="hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Próxima
                </SecondaryButton>
              </div>
            )}
            </>
          )}
        </>
        )}
      </Container>
    </>
  )
}

export default Admin

