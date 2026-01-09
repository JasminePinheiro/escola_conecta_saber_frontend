import styled from 'styled-components'
import { colors } from './GlobalStyles'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 200px);
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`

export const ProfileCard = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  border-left: 4px solid ${colors.orange};
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const ProfileForm = styled.form`
  width: 100%;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.textDark};
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${colors.gray};
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`

export const SectionDivider = styled.div`
  height: 1px;
  background: ${colors.gray};
  margin: 40px 0;
  
  @media (max-width: 768px) {
    margin: 30px 0;
  }
`

export const SuccessMessage = styled.div`
  background-color: ${colors.lightGreen};
  color: ${colors.green};
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  border-left: 4px solid ${colors.green};
`

export const RequiredAsterisk = styled.span`
  color: #dc3545;
  margin-left: 4px;
  font-weight: 600;
`

export const FormLegend = styled.p`
  font-size: 12px;
  color: ${colors.textGray};
  margin-top: 16px;
  margin-bottom: 0;
  
  ${RequiredAsterisk} {
    margin-left: 0;
    margin-right: 4px;
  }
`
