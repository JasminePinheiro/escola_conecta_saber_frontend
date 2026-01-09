import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const ContactHero = styled.section`
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(250, 249, 246, 0.8) 50%, rgba(74, 144, 226, 0.05) 100%);
  padding: 80px 0;
  text-align: center;
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

export const ContactTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeLight} 100%);
  color: ${colors.white};
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const ContactTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.textDark};
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export const ContactDescription = styled.p`
  font-size: 18px;
  color: ${colors.textDark};
  margin-bottom: 32px;
`

export const WhatsAppButton = styled.button`
  background: linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeLight} 100%);
  color: ${colors.white};
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
  }
`

export const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 60px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContactCard = styled.div`
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

export const ContactIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 40px;
`

export const ContactCardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 16px;
`

export const ContactCardText = styled.p`
  font-size: 15px;
  color: ${colors.textGray};
  line-height: 1.7;
  margin: 0;
`

export const ContactFormSection = styled.section`
  margin: 60px 0;
`

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: ${colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid ${colors.orange};
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const MapSection = styled.section`
  margin: 60px 0;
`

export const MapContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`

export const VisitSection = styled.section`
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(250, 249, 246, 0.8) 50%, rgba(74, 144, 226, 0.05) 100%);
  padding: 80px 0;
  text-align: center;
  margin: 60px 0 60px 0;
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

export const VisitTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.orange};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const VisitDescription = styled.p`
  font-size: 16px;
  color: ${colors.textDark};
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`

