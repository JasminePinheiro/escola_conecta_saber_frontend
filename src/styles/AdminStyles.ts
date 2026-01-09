import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const AdminBanner = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(250, 249, 246, 0.8) 50%, rgba(74, 144, 226, 0.05) 100%);
  text-align: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;
  
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

export const AdminGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const AdminCard = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`

export const AdminCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.orange};
  margin-bottom: 12px;
  cursor: pointer;
  line-height: 1.4;
  
  &:hover {
    color: ${colors.orangeLight};
  }
`

export const AdminCardDescription = styled.p`
  font-size: 14px;
  color: ${colors.textGray};
  line-height: 1.6;
  margin-bottom: 16px;
`

export const AdminCardDate = styled.div`
  font-size: 13px;
  color: ${colors.textGray};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
`

export const AdminCardAuthor = styled.div`
  font-size: 13px;
  color: ${colors.textGray};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`

export const AdminCardActions = styled.div`
  display: flex;
  gap: 12px;
  
  button {
    padding: 10px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`

export const SearchBar = styled.div`
  margin-bottom: 24px;
  position: relative;
  
  input {
    padding: 16px 20px 16px 45px;
    font-size: 16px;
  }
`

export const CreateButtonContainer = styled.div`
  margin-bottom: 24px;
  
  button {
    padding: 14px 28px;
    font-size: 16px;
  }
`

