import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from './GlobalStyles'

export const Nav = styled.nav`
  background-color: ${colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
    height: 80px;
    position: relative;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeLight} 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: 700;
  font-size: 18px;
`

export const LogoImage = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 40px;
  }
`

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.textDark};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  
  span {
    width: 30px;
    height: 3px;
    background: ${colors.textDark};
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;
    display: block;
    
    &.open:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }
    
    &.open:nth-child(2) {
      opacity: 0;
    }
    
    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(8px, -8px);
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`

export const Logo = styled(Link)`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.darkBlue};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.className?.includes('open') ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background: ${colors.white};
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 30px 30px;
    gap: 24px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 999;
    overflow-y: auto;
  }
`

export const NavLink = styled(Link)`
  color: ${colors.textDark};
  text-decoration: none;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 15px;
  
  &:hover {
    background-color: ${colors.beige};
    color: ${colors.orange};
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid ${colors.gray};
  }
`

export const NavButton = styled.button`
  background-color: ${colors.grayLight};
  color: ${colors.textDark};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
  font-family: inherit;
  
  &:hover {
    background-color: ${colors.orange};
    color: ${colors.white};
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
    margin-top: 8px;
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${colors.beige};
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid ${colors.gray};
    margin-bottom: 8px;
    
    &:hover {
      background-color: transparent;
    }
  }
`

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: 2px solid ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textDark};
  font-weight: 600;
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export const UserName = styled.span`
  color: ${colors.textDark};
  font-weight: 500;
  font-size: 15px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const UserDropdown = styled.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  z-index: 1001;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  overflow: hidden;
  
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    box-shadow: none;
    border-top: 1px solid ${colors.gray};
    margin-top: 8px;
    opacity: 1;
    visibility: visible;
    transform: none;
  }
`

export const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  text-align: left;
  color: ${colors.textDark};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  
  &:hover {
    background-color: ${colors.beige};
    color: ${colors.orange};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 14px 0;
    font-size: 16px;
    border-bottom: 1px solid ${colors.gray};
    
    &:last-child {
      border-bottom: none;
    }
  }
`

export const DropdownDivider = styled.div`
  height: 1px;
  background: ${colors.gray};
  margin: 4px 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`

