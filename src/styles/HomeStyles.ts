import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const HeroSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(250, 249, 246, 0.8) 50%, rgba(74, 144, 226, 0.05) 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`

export const HeroContent = styled.div`
  flex: 1;
  min-width: 300px;
  
  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
  }
`

export const HeroTag = styled.span`
  display: inline-block;
  background: ${colors.orange};
  color: ${colors.white};
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 16px;
    margin-bottom: 16px;
  }
`

export const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: ${colors.textDark};
  margin-bottom: 24px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`

export const HeroDescription = styled.p`
  font-size: 18px;
  color: ${colors.textDark};
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const HeroStats = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
  max-width: 100%;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
  
  @media (max-width: 1200px) {
    gap: 24px;
  }
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-width: fit-content;
  
  @media (max-width: 768px) {
    flex: 1;
    min-width: calc(50% - 10px);
  }
  
  @media (max-width: 480px) {
    min-width: 100%;
  }
`

export const StatNumber = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${colors.textDark};
  font-weight: 500;
`

export const HeroImage = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 968px) {
    order: -1;
    min-width: 100%;
    width: 100%;
    margin-bottom: 32px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`

export const ProgramsSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 249, 246, 0.9) 100%);
  position: relative;
`

export const ProgramsTag = styled.span`
  display: inline-block;
  background: ${colors.lightGreen};
  color: ${colors.green};
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`

export const ProgramsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${colors.blue};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const ProgramsDescription = styled.p`
  font-size: 16px;
  color: ${colors.textGray};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`

export const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
`

export const ProgramCard = styled.div`
  background: ${colors.white};
  padding: 40px 32px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`

export const ProgramIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 24px;
`

export const ProgramCardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 16px;
`

export const ProgramCardDescription = styled.p`
  font-size: 15px;
  color: ${colors.textGray};
  line-height: 1.7;
  margin: 0;
`

export const PostsSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(180deg, rgba(250, 249, 246, 0.9) 0%, rgba(255, 107, 53, 0.05) 100%);
  position: relative;
`

export const PostsTag = styled.span`
  display: inline-block;
  background: ${colors.lightBlue};
  color: ${colors.blue};
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`

export const PostsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${colors.purple};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const PostsDescription = styled.p`
  font-size: 16px;
  color: ${colors.textGray};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const PostCard = styled.div`
  background: ${colors.white};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`

export const PostCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.orange};
  margin-bottom: 16px;
  line-height: 1.4;
`

export const PostCardDescription = styled.p`
  font-size: 15px;
  color: ${colors.textGray};
  line-height: 1.7;
  margin-bottom: 20px;
`

export const PostCardDate = styled.div`
  font-size: 13px;
  color: ${colors.textGray};
  display: flex;
  align-items: center;
  gap: 6px;
`

export const PostCardAuthor = styled.div`
  font-size: 13px;
  color: ${colors.textGray};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`

export const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 48px;
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px 16px 50px;
  border: 2px solid ${colors.lightBlue};
  border-radius: 12px;
  font-size: 16px;
  color: ${colors.textDark};
  background: ${colors.white};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: ${colors.orange};
    box-shadow: 0 4px 16px rgba(255, 107, 53, 0.15);
  }
  
  &::placeholder {
    color: ${colors.textGray};
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }
`
