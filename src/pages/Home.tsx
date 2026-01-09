import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPostsPaginated, searchPosts } from '../services/postService'
import { Container, PrimaryButton, SecondaryButton, Text } from '../styles/GlobalStyles'
import iconUser from '../images/icon-user.svg'
import iconCalendar from '../images/icon-calendar.svg'
import heroImage from '../images/hero-image.png'
import iconBook from '../images/icon-book.svg'
import iconPeople from '../images/icon-people.svg'
import iconStar from '../images/icon-star.svg'
import iconSearch from '../images/icon-search.svg'
import {
  HeroSection,
  HeroContent,
  HeroTag,
  HeroTitle,
  HeroDescription,
  HeroStats,
  StatItem,
  StatNumber,
  StatLabel,
  HeroImage,
  ProgramsSection,
  ProgramsTag,
  ProgramsTitle,
  ProgramsDescription,
  ProgramsGrid,
  ProgramCard,
  ProgramIcon,
  ProgramCardTitle,
  ProgramCardDescription,
  PostsSection,
  PostsTag,
  PostsTitle,
  PostsDescription,
  PostsGrid,
  PostCard,
  PostCardTitle,
  PostCardDescription,
  PostCardDate,
  PostCardAuthor,
  SearchContainer,
  SearchInput,
  SearchIcon
} from '../styles/HomeStyles'
import { Post } from '../types'
import { colors } from '../styles/GlobalStyles'

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [totalPosts, setTotalPosts] = useState<number>(0)
  const postsPerPage = 6

  useEffect(() => {
    loadPosts(1)
  }, [])

  const loadPosts = async (page: number = 1): Promise<void> => {
    try {
      setLoading(true)
      const result = await getPostsPaginated(page, postsPerPage)
      setPosts(result.data || [])
      setTotalPages(result.totalPages || 1)
      setCurrentPage(result.page || 1)
      setTotalPosts(result.total || 0)
      setLoading(false)
    } catch (err) {
      console.error('Erro ao carregar posts:', err)
      setPosts([])
      setLoading(false)
    }
  }

  useEffect(() => {
    const performSearch = async (): Promise<void> => {
      if (searchTerm.trim() === '') {
        await loadPosts(1)
        setCurrentPage(1)
      } else {
        try {
          setLoading(true)
          const result = await searchPosts(searchTerm, 1, postsPerPage)
          setPosts(result.data || [])
          setTotalPages(result.totalPages || 1)
          setCurrentPage(1)
          setTotalPosts(result.total || 0)
          setLoading(false)
        } catch (err) {
          console.error('Erro ao buscar posts:', err)
          setPosts([])
          setLoading(false)
        }
      }
    }

    const debounceTimer = setTimeout(() => {
      performSearch()
    }, 500)

    return () => clearTimeout(debounceTimer)
  }, [searchTerm])

  const handlePageChange = async (page: number): Promise<void> => {
    if (searchTerm.trim() === '') {
      await loadPosts(page)
    } else {
      try {
        setLoading(true)
        const result = await searchPosts(searchTerm, page, postsPerPage)
        setPosts(result.data || [])
        setTotalPages(result.totalPages || 1)
        setCurrentPage(page)
        setTotalPosts(result.total || 0)
        setLoading(false)
      } catch (err) {
        console.error('Erro ao buscar posts:', err)
        setLoading(false)
      }
    }
    window.scrollTo({ top: document.getElementById('posts-section')?.offsetTop || 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(250, 249, 246, 0.9) 30%, rgba(191, 219, 254, 0.2) 70%, rgba(196, 181, 253, 0.15) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-move 8s ease infinite'
        }}
      ></div>
      
      <div 
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 197, 253, 0.2) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-rotate 12s linear infinite'
        }}
      ></div>
      
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ 
            background: 'rgba(255, 107, 53, 0.15)',
            animation: 'float-fast 15s ease-in-out infinite, pulse-glow 3s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: 'rgba(147, 197, 253, 0.15)',
            animation: 'float-fast 18s ease-in-out infinite reverse, pulse-glow 4s ease-in-out infinite',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{ 
            background: 'rgba(196, 181, 253, 0.15)',
            animation: 'float-fast 20s ease-in-out infinite, pulse-glow 5s ease-in-out infinite',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ 
            background: 'rgba(80, 200, 120, 0.1)',
            animation: 'float-fast 16s ease-in-out infinite, pulse-glow 3.5s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        ></div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-40 right-20 w-32 h-32 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.3), rgba(255, 140, 90, 0.2))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animation: 'morph-fast 10s ease-in-out infinite, float-fast 12s ease-in-out infinite',
            filter: 'blur(20px)'
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-40 h-40 opacity-15"
          style={{
            background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.3), rgba(147, 197, 253, 0.2))',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'morph-fast 12s ease-in-out infinite reverse, float-fast 14s ease-in-out infinite',
            filter: 'blur(25px)'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-24 h-24 opacity-10"
          style={{
            background: 'linear-gradient(90deg, rgba(196, 181, 253, 0.3), rgba(167, 139, 250, 0.2))',
            borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%',
            animation: 'morph-fast 11s ease-in-out infinite, float-fast 13s ease-in-out infinite',
            filter: 'blur(15px)'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-36 h-36 opacity-12"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 107, 53, 0.25), rgba(196, 181, 253, 0.2))',
            borderRadius: '40% 60% 50% 50% / 50% 50% 50% 50%',
            animation: 'morph-fast 13s ease-in-out infinite, float-fast 15s ease-in-out infinite reverse',
            filter: 'blur(22px)'
          }}
        ></div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0 ? 'rgba(255, 107, 53, 0.8)' : i % 3 === 1 ? 'rgba(74, 144, 226, 0.8)' : 'rgba(196, 181, 253, 0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 6 + 4}px currentColor`
            }}
          ></div>
        ))}
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 right-0 h-64 opacity-15"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(255, 107, 53, 0.3))',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 80%, 0 90%)',
            animation: 'wave-fast 4s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute top-0 left-0 right-0 h-64 opacity-15"
          style={{
            background: 'linear-gradient(0deg, transparent, rgba(147, 197, 253, 0.3))',
            clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 10%)',
            animation: 'wave-fast 5s ease-in-out infinite reverse'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 opacity-10"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(196, 181, 253, 0.25))',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 85%, 0 95%)',
            animation: 'wave-fast 6s ease-in-out infinite',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <HeroSection className="relative" style={{ position: 'relative', overflow: 'hidden', zIndex: 10 }}>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div 
            className="hero-container"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '60px',
              flexWrap: 'wrap' as const
            }}
          >
            <HeroContent className="animate-fade-in">
              <HeroTag className="animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">Escola Para Todas as Idades</HeroTag>
              <HeroTitle className="animate-slide-up">Educação de Qualidade Para Todos</HeroTitle>
              <HeroDescription className="animate-fade-in">
                Desenvolvemos o potencial único de cada estudante através de métodos educacionais inovadores e um ambiente acolhedor para todas as idades.
              </HeroDescription>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <PrimaryButton 
                  className="hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-slow hero-button"
                >
                  Comece Agora
                </PrimaryButton>
              </Link>
              
              <HeroStats className="animate-fade-in">
                <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group">
                  <StatNumber style={{ color: colors.orange }} className="group-hover:animate-bounce">25+</StatNumber>
                  <StatLabel>Anos de Experiência</StatLabel>
                </StatItem>
                <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group">
                  <StatNumber style={{ color: colors.blue }} className="group-hover:animate-bounce">6,500+</StatNumber>
                  <StatLabel>Alunos Formados</StatLabel>
                </StatItem>
                <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group">
                  <StatNumber style={{ color: colors.green }} className="group-hover:animate-bounce">100+</StatNumber>
                  <StatLabel>Programas Ativos</StatLabel>
                </StatItem>
                <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group">
                  <StatNumber style={{ color: colors.purple }} className="group-hover:animate-bounce">6.561+</StatNumber>
                  <StatLabel>Famílias Satisfeitas</StatLabel>
                </StatItem>
              </HeroStats>
            </HeroContent>
            
            <HeroImage className="animate-fade-in">
              <div className="w-[500px] h-[500px] max-w-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-orange flex items-center justify-center text-textGray overflow-hidden hover:scale-105 hover:rotate-3 transition-all duration-500 shadow-2xl hover:shadow-orange/50 hero-image-container">
                <img src={heroImage} alt="Professor e crianças ao redor de um globo" className="w-full h-full object-cover" />
              </div>
            </HeroImage>
          </div>
        </Container>
      </HeroSection>

      <ProgramsSection>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <ProgramsTag>Nossos Programas</ProgramsTag>
            <ProgramsTitle>Programas Educacionais</ProgramsTitle>
            <ProgramsDescription>
              Oferecemos programas abrangentes voltados para o desenvolvimento integral de crianças, jovens e adultos.
            </ProgramsDescription>
          </div>
          
          <ProgramsGrid>
            <ProgramCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer">
              <ProgramIcon 
                style={{ background: colors.softPeach }}
                className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
              >
                <img src={iconBook} alt="Educação Literária" />
              </ProgramIcon>
              <ProgramCardTitle className="group-hover:text-orange transition-colors duration-300">Educação Literária</ProgramCardTitle>
              <ProgramCardDescription>
                Desenvolvemos o amor pela leitura através de métodos lúdicos e interativos.
              </ProgramCardDescription>
            </ProgramCard>
            
            <ProgramCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <ProgramIcon 
                style={{ background: colors.lightBlue }}
                className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
              >
                <img src={iconPeople} alt="Desenvolvimento Social" />
              </ProgramIcon>
              <ProgramCardTitle className="group-hover:text-blue-500 transition-colors duration-300">Desenvolvimento Social</ProgramCardTitle>
              <ProgramCardDescription>
                Atividades em grupo que promovem colaboração e habilidades sociais.
              </ProgramCardDescription>
            </ProgramCard>
            
            <ProgramCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <ProgramIcon 
                style={{ background: colors.lightPurple }}
                className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
              >
                <img src={iconStar} alt="Criatividade Artística" />
              </ProgramIcon>
              <ProgramCardTitle className="group-hover:text-purple-500 transition-colors duration-300">Criatividade Artística</ProgramCardTitle>
              <ProgramCardDescription>
                Expressão através das artes visuais, música e teatro.
              </ProgramCardDescription>
            </ProgramCard>
          </ProgramsGrid>
        </Container>
      </ProgramsSection>

      <PostsSection id="posts-section">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <PostsTag>Artigos Educacionais</PostsTag>
            <PostsTitle>Nossas Postagens</PostsTitle>
            <PostsDescription>
              Confira nossos posts sobre educação e desenvolvimento.
            </PostsDescription>
            {!loading && totalPosts > 0 && (
              <Text style={{ marginTop: '16px', color: colors.textGray, fontSize: '14px' }}>
                {totalPosts} {totalPosts === 1 ? 'post encontrado' : 'posts encontrados'}
              </Text>
            )}
          </div>
          
          <SearchContainer>
            <SearchIcon>
              <img src={iconSearch} alt="search" />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Buscar posts por título, descrição ou tags"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          {loading ? (
            <Text style={{ textAlign: 'center' }}>Carregando posts...</Text>
          ) : posts.length === 0 ? (
            <Text style={{ textAlign: 'center', color: colors.textGray }}>
              {searchTerm.trim() ? `Nenhum post encontrado com o termo "${searchTerm}"` : 'Nenhum post disponível no momento.'}
            </Text>
          ) : (
            <>
              <PostsGrid>
                {posts.map((post, index) => (
                  <Link 
                    key={post.id} 
                    to={`/post/${post.id}`} 
                    className="no-underline text-inherit animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PostCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-orange">
                      <PostCardTitle className="group-hover:text-orange transition-colors duration-300">{post.title}</PostCardTitle>
                      <PostCardDescription className="group-hover:text-textDark transition-colors duration-300">
                        {post.description || (post.content?.substring(0, 120) + '...')}
                      </PostCardDescription>
                      {post.tags && post.tags.length > 0 && (
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} style={{
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              background: colors.lightBlue,
                              color: colors.textDark
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <PostCardAuthor className="group-hover:scale-105 transition-transform duration-300">
                        <img src={iconUser} alt="user" /> {post.author || 'Autor não informado'}
                      </PostCardAuthor>
                      <PostCardDate className="group-hover:scale-105 transition-transform duration-300">
                        <img src={iconCalendar} alt="calendar" /> {post.createdAt 
                          ? new Date(post.createdAt).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric'
                            })
                          : 'Data não disponível'}
                      </PostCardDate>
                    </PostCard>
                  </Link>
                ))}
              </PostsGrid>
              
              {totalPages > 1 && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '16px', 
                  marginTop: '48px',
                  flexWrap: 'wrap'
                }}>
                  <SecondaryButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1 || loading}
                    className="hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    ← Anterior
                  </SecondaryButton>
                  
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum: number
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          disabled={loading}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: currentPage === pageNum ? `2px solid ${colors.orange}` : `2px solid ${colors.grayLighter}`,
                            background: currentPage === pageNum ? colors.orange : 'white',
                            color: currentPage === pageNum ? 'white' : colors.textDark,
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontWeight: currentPage === pageNum ? 600 : 400,
                            transition: 'all 0.3s',
                            opacity: loading ? 0.5 : 1
                          }}
                          className="hover:scale-110 hover:shadow-lg transition-all duration-300"
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>
                  
                  <Text style={{ color: colors.textGray, fontSize: '14px' }}>
                    Página {currentPage} de {totalPages}
                  </Text>
                  
                  <SecondaryButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || loading}
                    className="hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Próxima →
                  </SecondaryButton>
                </div>
              )}
            </>
          )}
        </Container>
      </PostsSection>
    </div>
  )
}

export default Home
