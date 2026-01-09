import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from './GlobalStyles'

export const FooterContainer = styled.footer`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  margin-top: auto;
  padding-top: 60px;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  
  h3 {
    color: ${colors.white};
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`

export const FooterText = styled.p`
  color: ${colors.white};
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 20px 0;
  opacity: 0.9;
`

export const FooterTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FooterLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-size: 14px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: ${colors.orange};
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`

export const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.orange};
    transform: translateY(-2px);
  }
`

export const CopyrightBar = styled.div`
  background-color: ${colors.orange};
  color: ${colors.white};
  text-align: center;
  padding: 16px 0;
  font-size: 14px;
  font-weight: 500;
`

