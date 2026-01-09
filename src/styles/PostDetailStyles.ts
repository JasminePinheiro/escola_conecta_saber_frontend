import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const BackLink = styled.div`
  margin-bottom: 24px;
  
  a {
    color: ${colors.textDark};
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
    font-size: 16px;
    
    &:hover {
      color: ${colors.orange};
    }
  }
`

export const DisciplineBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeLight} 100%);
  color: ${colors.white};
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
`

export const PostMetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  color: ${colors.textGray};
  font-size: 14px;
  
  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`

export const PostContent = styled.div`
  margin-top: 32px;
`

export const ContentSection = styled.div`
  margin-bottom: 32px;
`

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 16px;
`

export const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  font-size: 16px;
  color: ${colors.textDark};
  line-height: 1.8;
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${colors.orange};
    font-weight: bold;
    font-size: 20px;
  }
`

export const CTASection = styled.section`
  padding: 80px 0;
  margin-bottom: 60px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(250, 249, 246, 0.8) 50%, rgba(74, 144, 226, 0.05) 100%);
  text-align: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  
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

export const CTATitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${colors.orange};
  margin-bottom: 20px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const CTAText = styled.p`
  font-size: 18px;
  color: ${colors.textDark};
  margin-bottom: 32px;
  line-height: 1.7;
`

