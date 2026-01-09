import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const AboutSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(250, 249, 246, 0.8) 50%, rgba(74, 144, 226, 0.05) 100%);
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

export const AboutContent = styled.div`
  flex: 1;
  min-width: 300px;
`

export const AboutImage = styled.div`
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    height: auto;
    border: 2px solid ${colors.orange};
    border-radius: 12px;
    display: block;
  }
`

export const StatsBar = styled.div`
  background: linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeLight} 100%);
  padding: 40px 0;
  border-radius: 12px 12px 0 0;
  margin-top: -20px;
  position: relative;
  z-index: 1;
`

export const StatItem = styled.div`
  text-align: center;
  color: ${colors.white};
  
  @media (max-width: 768px) {
    flex: 1 1 50%;
    min-width: 150px;
  }
`

export const MissionSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.white};
`

export const MissionContent = styled.div`
  flex: 1;
  min-width: 300px;
`

export const MissionImage = styled.div`
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    height: auto;
    border: 2px solid ${colors.orange};
    border-radius: 12px;
    display: block;
  }
`

export const ValuesSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.beige};
`

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
`

export const ValueCard = styled.div`
  background: ${colors.white};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`

export const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 auto 20px;
`

export const TeamSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.white};
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
`

export const TeamCard = styled.div`
  background: ${colors.white};
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`

export const TeamPhoto = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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
  font-size: 36px;
  font-weight: 700;
  color: ${colors.orange};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const CTAText = styled.p`
  font-size: 18px;
  color: ${colors.textDark};
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

