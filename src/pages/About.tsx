import React from 'react'
import { Container, Title, Text, PrimaryButton } from '../styles/GlobalStyles'
import {
  AboutSection,
  AboutContent,
  AboutImage,
  StatsBar,
  StatItem,
  MissionSection,
  MissionContent,
  MissionImage,
  ValuesSection,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  TeamSection,
  TeamGrid,
  TeamCard,
  TeamPhoto,
  CTASection,
  CTATitle,
  CTAText
} from '../styles/AboutStyles'
import { colors } from '../styles/GlobalStyles'
import aboutImage from '../images/about-image.png'
import schoolImage from '../images/school.png'
import teacher1Image from '../images/teacher1.png'
import teacher2Image from '../images/teacher2.png'
import teacher3Image from '../images/teacher3.png'
import iconBooks from '../images/icon-books.svg'
import iconHeart from '../images/icon-heart.svg'
import iconGoal from '../images/icon-goal.svg'

const About: React.FC = () => {
  return (
    <>
      <AboutSection>
        <Container>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '60px',
            flexWrap: 'wrap' as const
          }}>
            <AboutContent className="animate-slide-up">
              <span style={{
                display: 'inline-block',
                background: colors.orange,
                color: colors.white,
                padding: '8px 20px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '30px'
              }} className="hover:scale-105 transition-transform duration-300 cursor-default animate-fade-in">
                Nossa História
              
              </span>
              <Title style={{ fontSize: '42px', marginBottom: '24px', color: colors.textDark }} className="animate-fade-in">
                Transformando Vidas Através da Educação
              </Title>
              <Text style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '32px' }} className="animate-fade-in">
                Há mais de 25 anos, a Escola Conecta Saber tem sido pioneira em oferecer educação de qualidade, formando cidadãos preparados para enfrentar os desafios do futuro com confiança e competência.
              </Text>
            </AboutContent>
            <AboutImage className="animate-fade-in">
              <img 
                src={aboutImage} 
                alt="Crianças da Escola Conecta Saber"
              />
            </AboutImage>
          </div>
        </Container>
      </AboutSection>

      <StatsBar>
        <Container>
          <div className="flex justify-around flex-wrap gap-10 animate-fade-in">
            <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group animate-slide-up">
              <div className="text-4xl font-bold text-white mb-2 group-hover:animate-bounce">25+</div>
              <div className="text-sm font-bold text-white">Anos de Experiência</div>
            </StatItem>
            <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-white mb-2 group-hover:animate-bounce">6,500+</div>
              <div className="text-sm font-bold text-white">Alunos Formados</div>
            </StatItem>
            <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-white mb-2 group-hover:animate-bounce">100+</div>
              <div className="text-sm font-bold text-white">Programas Ativos</div>
            </StatItem>
            <StatItem className="hover:scale-110 transition-transform duration-300 cursor-default group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-white mb-2 group-hover:animate-bounce">6.561+</div>
              <div className="text-sm font-bold text-white">Famílias Satisfeitas</div>
            </StatItem>
          </div>
        </Container>
      </StatsBar>

      <MissionSection>
        <Container>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '60px',
            flexWrap: 'wrap' as const
          }}>
            <MissionImage>
              <img 
                src={schoolImage} 
                alt="Escola Conecta Saber"
              />
            </MissionImage>
            <MissionContent>
              <Title style={{ fontSize: '36px', marginBottom: '24px', color: colors.orange }}>
                Nossa Missão
              </Title>
              <Text style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                Acreditamos que cada criança possui um potencial único e nosso papel é proporcionar um ambiente estimulante onde possam explorar, descobrir e desenvolver suas habilidades naturais.
              </Text>
              <Text style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Através de metodologias inovadoras e um ambiente acolhedor, preparamos nossos alunos não apenas academicamente, mas também socialmente e emocionalmente para a vida.
              </Text>
            </MissionContent>
          </div>
        </Container>
      </MissionSection>

      <ValuesSection>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title style={{ fontSize: '36px', marginBottom: '16px', color: colors.blueMedium }}>
              Nossos Valores
            </Title>
            <Text style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Os princípios que guiam nossa abordagem educacional e moldam o caráter de nossos estudantes.
            </Text>
          </div>
          <ValuesGrid>
            <ValueCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer">
              <ValueIcon style={{ background: colors.lightBlue }} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <img src={iconBooks} alt="Metodologia Inovadora" />
              </ValueIcon>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: colors.textDark }} className="group-hover:text-blue-500 transition-colors duration-300">
                Metodologia Inovadora
              </h3>
              <Text>
                Utilizamos métodos educacionais modernos e adaptativos para cada estudante.
              </Text>
            </ValueCard>
            <ValueCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <ValueIcon style={{ background: colors.softPeach }} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <img src={iconHeart} alt="Educação com Amor" />
              </ValueIcon>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: colors.textDark }} className="group-hover:text-red-500 transition-colors duration-300">
                Educação com Amor
              </h3>
              <Text>
                Acreditamos que o aprendizado acontece melhor em um ambiente acolhedor e carinhoso.
              </Text>
            </ValueCard>
            <ValueCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <ValueIcon style={{ background: colors.lightPurple }} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <img src={iconGoal} alt="Foco no Futuro" />
              </ValueIcon>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: colors.textDark }} className="group-hover:text-purple-500 transition-colors duration-300">
                Foco no Futuro
              </h3>
              <Text>
                Preparamos nossos alunos para os desafios do mundo moderno.
              </Text>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>

      <TeamSection>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title style={{ fontSize: '36px', marginBottom: '16px', color: colors.purpleMedium }}>
              Nossa Equipe de Especialistas
            </Title>
            <Text style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Profissionais dedicados e qualificados que fazem a diferença na vida de nossos estudantes.
            </Text>
          </div>
          <TeamGrid>
            <TeamCard>
              <TeamPhoto>
                <img src={teacher1Image} alt="Ana Silva" />
              </TeamPhoto>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: colors.textDark }}>
                  Prof. Ana Silva
                </h3>
                <p style={{ fontSize: '14px', color: colors.orange, marginBottom: '12px', fontWeight: 600 }}>
                  Diretora Pedagógica
                </p>
                <Text style={{ fontSize: '14px', color: colors.textGray }}>
                  10 anos de experiência em educação infantil e metodologias inovadoras.
                </Text>
              </div>
            </TeamCard>
            <TeamCard>
              <TeamPhoto>
                <img src={teacher2Image} alt="Ana Costa" />
              </TeamPhoto>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: colors.textDark }}>
                  Prof. Ana Costa
                </h3>
                <p style={{ fontSize: '14px', color: colors.orange, marginBottom: '12px', fontWeight: 600 }}>
                  Coordenadora Acadêmica
                </p>
                <Text style={{ fontSize: '14px', color: colors.textGray }}>
                  Especialista em desenvolvimento cognitivo e educação personalizada.
                </Text>
              </div>
            </TeamCard>
            <TeamCard>
              <TeamPhoto>
                <img src={teacher3Image} alt="Roberto Lima" />
              </TeamPhoto>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: colors.textDark }}>
                  Prof. Roberto Lima
                </h3>
                <p style={{ fontSize: '14px', color: colors.orange, marginBottom: '12px', fontWeight: 600 }}>
                  Coordenador de Projetos
                </p>
                <Text style={{ fontSize: '14px', color: colors.textGray }}>
                  Focado em tecnologia educacional e projetos interdisciplinares.
                </Text>
              </div>
            </TeamCard>
          </TeamGrid>
        </Container>
      </TeamSection>

      <CTASection>
        <Container>
          <CTATitle>Venha Fazer Parte da Nossa Família</CTATitle>
          <CTAText>
            Descubra como podemos ajudar seu filho a alcançar todo seu potencial em um ambiente educacional inspirador e acolhedor.
          </CTAText>
          <PrimaryButton onClick={() => window.location.href = '/contato'}>
            Contato
          </PrimaryButton>
        </Container>
      </CTASection>
    </>
  )
}

export default About

