import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Nav, 
  NavContainer, 
  NavLinks, 
  NavLink, 
  NavButton, 
  LogoContainer, 
  LogoImage,
  LogoText,
  HamburgerButton,
  MobileMenu,
  UserInfo,
  UserIcon,
  UserName,
  UserDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider
} from '../styles/NavbarStyles'
import logoImage from '../images/logo.png'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { isAuthenticated, logout, user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    closeMenu()
    setIsUserDropdownOpen(false)
    navigate('/')
  }

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen)
  }

  const handleEditProfile = () => {
    navigate('/profile')
    setIsUserDropdownOpen(false)
    closeMenu()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false)
      }
    }

    if (isUserDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isUserDropdownOpen])

  return (
    <Nav className="animate-slide-up">
      <NavContainer>
        <LogoContainer>
          <Link to="/" className="hover:scale-105 transition-transform duration-300" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <LogoImage 
              src={logoImage} 
              alt="Escola Conecta Saber"
              className="hover:scale-110 transition-all duration-300"
            />
            <LogoText>Escola Conecta Saber</LogoText>
          </Link>
        </LogoContainer>
        <HamburgerButton onClick={toggleMenu} aria-label="Menu">
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </HamburgerButton>
        <NavLinks className={isMenuOpen ? 'open' : ''}>
          <NavLink to="/" onClick={closeMenu} className="hover:scale-110 transition-all duration-300">Início</NavLink>
          <NavLink to="/sobre" onClick={closeMenu} className="hover:scale-110 transition-all duration-300">Sobre</NavLink>
          <NavLink to="/contato" onClick={closeMenu} className="hover:scale-110 transition-all duration-300">Contato</NavLink>
          {isAuthenticated ? (
            <>
              {user?.role === 'professor' && (
                <NavLink to="/admin" onClick={closeMenu} className="hover:scale-110 transition-all duration-300">Gerenciar Postagens</NavLink>
              )}
              <UserDropdown ref={dropdownRef}>
                <UserInfo onClick={toggleUserDropdown}>
                  <UserIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                      <path d="M12 14C7.58172 14 4 15.7909 4 18V20H20V18C20 15.7909 16.4183 14 12 14Z" fill="currentColor"/>
                    </svg>
                  </UserIcon>
                  <UserName>{user?.name}</UserName>
                </UserInfo>
                <DropdownMenu isOpen={isUserDropdownOpen}>
                  <DropdownItem onClick={handleEditProfile}>
                    Editar Perfil
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem onClick={handleLogout}>
                    Sair
                  </DropdownItem>
                </DropdownMenu>
              </UserDropdown>
            </>
          ) : (
            <>
              <NavLink to="/register" onClick={closeMenu} className="hover:scale-110 transition-all duration-300">Cadastrar</NavLink>
              <NavButton onClick={() => { navigate('/login'); closeMenu(); }} className="hover:scale-110 hover:shadow-lg transition-all duration-300">Entrar</NavButton>
            </>
          )}
        </NavLinks>
        {isMenuOpen && <MobileMenu onClick={closeMenu} />}
      </NavContainer>
    </Nav>
  )
}

export default Navbar

