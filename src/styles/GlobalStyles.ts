import styled from 'styled-components'

// Cores do tema Escola Conecta Saber
export const colors = {
  green: '#06C373',
  lightGreen: '#E9FAED',
  orange: '#FF6B35',
  orangeLight: '#FF8C5A',
  softPeach: '#FACAB7',
  lightPeach: '#F8E6DA',
  blue:'#6371F6',
  darkBlue: '#1E3A5F',
  lightBlue: '#DDE5FF',
  lightPurple: '#CBB6FB',
  purple: '#8757F6',
  beige: '#FAF9F6',
  white: '#FFFFFF',
  grayLight: '#F5F5F5',
  gray: '#E0E0E0',
  grayDark: '#2C3E50',
  textDark: '#2C3E50',
  textGray: '#666666',
}

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`

export const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

export const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeLight} 100%);
  color: ${colors.white};
  border: none;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${colors.orangeLight} 0%, ${colors.orange} 100%);
  }
`

export const DangerButton = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.orange};
  border: 2px solid ${colors.orange};
  
  &:hover:not(:disabled) {
    background-color: ${colors.orange};
    color: ${colors.white};
  }
`

export const SecondaryButton = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.orange};
  border: 2px solid ${colors.orange};
  
  &:hover:not(:disabled) {
    background-color: ${colors.orange};
    color: ${colors.white};
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  background-color: ${colors.grayLight};
  color: ${colors.textDark};
  transition: all 0.3s ease;
  font-family: inherit;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: ${colors.orange};
    background-color: ${colors.white};
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  background-color: ${colors.grayLight};
  color: ${colors.textDark};
  min-height: 200px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: ${colors.orange};
    background-color: ${colors.white};
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  background-color: ${colors.grayLight};
  color: ${colors.textDark};
  transition: all 0.3s ease;
  font-family: inherit;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${colors.orange};
    background-color: ${colors.white};
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
  
  &:hover {
    border-color: ${colors.orange};
  }
`

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  border-left: 4px solid ${colors.orange};
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.textDark};
  margin-bottom: 24px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 16px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  color: ${colors.textGray};
  line-height: 1.7;
  margin: 0;
`

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 10px;
`

export const FormGroup = styled.div`
  margin-bottom: 24px;
`

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
`

export const SuccessMessage = styled.p`
  color: #28a745;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
`

