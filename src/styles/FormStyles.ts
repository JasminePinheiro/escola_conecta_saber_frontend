import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const FormActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid ${colors.gray};
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    
    button {
      width: 100%;
    }
  }
`

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
    
    &:hover {
      color: ${colors.orange};
    }
  }
`

