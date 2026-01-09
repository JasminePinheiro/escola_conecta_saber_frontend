import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 40px 0;
`

export const LoginCard = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  border-left: 4px solid ${colors.orange};
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const LoginForm = styled.form`
  width: 100%;
`

