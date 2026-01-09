import React from 'react'
import { FooterContainer, FooterContent, FooterColumn, FooterLogo, FooterText, FooterLinks, FooterLink, FooterTitle, SocialIcons, SocialIcon, CopyrightBar } from '../styles/FooterStyles'
import { colors } from '../styles/GlobalStyles'
import logoImage from '../images/logo.png'
import iconFacebook from '../images/icon-facebook.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconTwitter from '../images/icon-twitter.svg'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <div className="w-10 h-10 bg-gradient-to-r from-orange to-orange-light rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
              <img src={logoImage} alt="Escola Conecta Saber" />
            </div>
            <h3 style={{ color: colors.white, marginBottom: '12px' }} className="hover:scale-105 transition-transform duration-300">Escola Conecta Saber</h3>
          </FooterLogo>
          <FooterText className="hover:text-white transition-colors duration-300">
            Dedicados a oferecer a melhor educação para todas as idades, preparando estudantes para um futuro brilhante através de métodos inovadores e carinho.
          </FooterText>
          <SocialIcons>
            <SocialIcon className="hover:scale-125 hover:bg-orange transition-all duration-300"><img src={iconFacebook} alt="Facebook" /></SocialIcon>
            <SocialIcon className="hover:scale-125 hover:bg-orange transition-all duration-300"><img src={iconInstagram} alt="Instagram" /></SocialIcon>
            <SocialIcon className="hover:scale-125 hover:bg-orange transition-all duration-300"><img src={iconTwitter} alt="Twitter" /></SocialIcon>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Links</FooterTitle>
          <FooterLinks>
            <FooterLink to="/" className="hover:scale-110 transition-transform duration-300">Início</FooterLink>
            <FooterLink to="/sobre" className="hover:scale-110 transition-transform duration-300">Sobre nós</FooterLink>
            <FooterLink to="/contato" className="hover:scale-110 transition-transform duration-300">Contato</FooterLink>
            <FooterLink to="/admin" className="hover:scale-110 transition-transform duration-300">Gerenciar Postagens</FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>
            (11) 99999-8888<br />
            escola.c.saber@gmail.com
          </FooterText>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Endereço</FooterTitle>
          <FooterText>
            Rua Sabedoria, 202<br />
            Vila Mariana<br />
            São Paulo - SP
          </FooterText>
        </FooterColumn>
      </FooterContent>
      <CopyrightBar>
        Copyright © Escola Conecta Saber 2026
      </CopyrightBar>
    </FooterContainer>
  )
}

export default Footer

