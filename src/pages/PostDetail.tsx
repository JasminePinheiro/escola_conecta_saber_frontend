import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPostById } from '../services/postService'
import { useAuth } from '../contexts/AuthContext'
import {
  Container,
  Title,
  Card,
  Text,
  PrimaryButton
} from '../styles/GlobalStyles'
import { 
  BackLink,
  PostMetaInfo,
  PostContent,
  CTASection,
  CTATitle,
  CTAText
} from '../styles/PostDetailStyles'
import { Post } from '../types'
import { colors } from '../styles/GlobalStyles'
import iconCalendar from '../images/icon-calendar.svg'
import iconUser from '../images/icon-user.svg'

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      loadPost()
    }
  }, [id])

  const loadPost = async (): Promise<void> => {
    if (!id) return
    
    try {
      setLoading(true)
      const data = await getPostById(id)
      
      if (data.status === 'private') {
        if (!user) {
          setError('Você precisa estar logado para visualizar posts privados.')
          setPost(null)
          return
        }
        const postAuthor = (data.author || '').trim().toLowerCase()
        const userName = (user.name || '').trim().toLowerCase()
        if (postAuthor !== userName) {
          setError('Você não tem permissão para visualizar este post.')
          setPost(null)
          return
        }
      }
      
      setPost(data)
      setError(null)
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Erro ao carregar post. Tente novamente mais tarde.')
      console.error('Erro ao carregar post:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container>
        <Text>Carregando post...</Text>
      </Container>
    )
  }

  if (error || !post) {
    return (
      <Container>
        <Card>
          <Text style={{ color: colors.errorRed }}>{error || 'Post não encontrado.'}</Text>
        </Card>
      </Container>
    )
  }

  return (
    <>
      <Container className="animate-fade-in">
        <BackLink>
          <Link to="/" className="hover:scale-105 hover:text-orange transition-all duration-300 inline-flex items-center gap-2">← Voltar</Link>
        </BackLink>


        <Card className="animate-slide-up hover:shadow-2xl transition-shadow duration-300">
          <Title style={{ fontSize: '36px', marginBottom: '16px' }} className="animate-fade-in">{post.title}</Title>
          
          {post.tags && post.tags.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }} className="animate-fade-in">
              {post.tags.map((tag, idx) => (
                <span key={idx} style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  background: colors.lightBlue,
                  color: colors.textDark,
                  fontWeight: 500
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {post.description && (
            <Text style={{ marginBottom: '20px', color: colors.textGray, fontSize: '16px', lineHeight: '1.7' }} className="animate-fade-in">
              {post.description}
            </Text>
          )}
          
          <PostMetaInfo className="animate-fade-in">
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2">
                <img src={iconUser} alt="icon-user" /> {post.author || 'Autor não informado'}
              </span>
              {post.createdAt && (
                <span className="hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2">
                  <img src={iconCalendar} alt="icon-calendar" /> {new Date(post.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              )}
              {post.status && (
                <span style={{
                  padding: '4px 12px',
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
            </div>
          </PostMetaInfo>
          
          <PostContent className="animate-fade-in">
            <div style={{ 
              whiteSpace: 'pre-wrap', 
              fontSize: '16px', 
              lineHeight: '1.7', 
              color: colors.textDark 
            }}>
              {post.content || 'Conteúdo não disponível.'}
            </div>
          </PostContent>
        </Card>
      </Container>

      <CTASection className="animate-fade-in hover:scale-105 transition-transform duration-300">
        <Container>
          <CTATitle className="hover:scale-105 transition-transform duration-300">Gostou do conteúdo?</CTATitle>
          <CTAText>Explore mais artigos sobre educação em nosso blog.</CTAText>
          <PrimaryButton 
            onClick={() => navigate('/')}
            className="hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse-slow"
          >
            Ver mais Posts
          </PrimaryButton>
        </Container>
      </CTASection>
    </>
  )
}

export default PostDetail
