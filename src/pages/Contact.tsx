import React, { useState } from 'react'
import { Container, Title, PrimaryButton, Input, TextArea, FormGroup, Label } from '../styles/GlobalStyles'
import {
  ContactHero,
  ContactTag,
  ContactTitle,
  ContactDescription,
  WhatsAppButton,
  ContactCards,
  ContactCard,
  ContactIcon,
  ContactCardTitle,
  ContactCardText,
  ContactFormSection,
  ContactForm,
  MapSection,
  MapContainer,
  VisitSection,
  VisitTitle,
  VisitDescription
} from '../styles/ContactStyles'
import { colors } from '../styles/GlobalStyles'
import iconWhatsApp from '../images/icon-whatsApp.svg'
import iconPlaceMarker from '../images/icon-place-marker.svg'
import iconPhone from '../images/icon-phone.svg'
import iconEmail from '../images/icon-email.svg'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <>
      <ContactHero className="animate-fade-in">
        <Container>
          <ContactTag className="animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">Fale Conosco</ContactTag>
          <ContactTitle className="animate-slide-up">Vamos Conversar?</ContactTitle>
          <ContactDescription className="animate-fade-in">
            Estamos aqui para esclarecer suas dúvidas
          </ContactDescription>
          <WhatsAppButton className="hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse-slow">
            <span style={{ marginRight: '8px' }}><img src={iconWhatsApp} alt="WhatsApp" /></span>
            WhatsApp
          </WhatsAppButton>
        </Container>
      </ContactHero>

      <Container>
        <ContactCards className="animate-fade-in">
          <ContactCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer">
            <ContactIcon 
              style={{ background: colors.lightBlue }}
              className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
            >
              <img src={iconPlaceMarker} alt="Endereço" />
            </ContactIcon>
            <ContactCardTitle className="group-hover:text-blue-500 transition-colors duration-300">Endereço</ContactCardTitle>
            <ContactCardText>
              Rua Sabedoria, 202<br />
              Vila Mariana, SP<br />
              04011-110
            </ContactCardText>
          </ContactCard>

          <ContactCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.1s' }}>
            <ContactIcon 
              style={{ background: colors.softPeach }}
              className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
            >
              <img src={iconPhone} alt="Telefone" />
            </ContactIcon>
            <ContactCardTitle className="group-hover:text-orange transition-colors duration-300">Telefone</ContactCardTitle>
            <ContactCardText>
              (11) 00000-0000<br />
              (11) 3344-9956
            </ContactCardText>
          </ContactCard>

          <ContactCard className="hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up group cursor-pointer" style={{ animationDelay: '0.2s' }}>
            <ContactIcon 
              style={{ background: colors.lightPurple }}
              className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
            >
              <img src={iconEmail} alt="E-mail" />
            </ContactIcon>
            <ContactCardTitle className="group-hover:text-purple-500 transition-colors duration-300">E-mail</ContactCardTitle>
            <ContactCardText>
              escola.c.saber@gmail.com
            </ContactCardText>
          </ContactCard>
        </ContactCards>

        <ContactFormSection className="animate-fade-in">
          <Title className="animate-slide-up">Envie sua Mensagem</Title>
          <ContactForm onSubmit={handleSubmit} className="animate-slide-up hover:shadow-2xl transition-shadow duration-300">
            <FormGroup className="animate-fade-in">
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <FormGroup className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
                rows={5}
                required
                className="focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-300 hover:shadow-md"
              />
            </FormGroup>

            <PrimaryButton 
              type="submit" 
              style={{ width: '100%', marginTop: '8px' }}
              className="hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-slow"
            >
              Enviar
            </PrimaryButton>
          </ContactForm>
        </ContactFormSection>

        <MapSection>
          <Title style={{ marginBottom: '24px' }}>Nossa Localização</Title>
          <MapContainer>
            <div style={{
              width: '100%',
              height: '400px',
              background: '#f0f0f0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.textGray,
              border: `2px solid ${colors.gray}`
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197584455123!2d-46.633309!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </MapContainer>
        </MapSection>
      </Container>

      <VisitSection className="animate-fade-in hover:scale-105 transition-transform duration-300">
        <Container>
          <VisitTitle className="hover:scale-105 transition-transform duration-300">Pronto para Conhecer Nossa Escola?</VisitTitle>
          <VisitDescription className="animate-fade-in">
            Agende uma visita presencial e veja de perto como podemos oferecer a melhor educação para seu filho em um ambiente acolhedor e estimulante.
          </VisitDescription>
          <WhatsAppButton className="hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse-slow">
          <span style={{ marginRight: '8px' }}><img src={iconWhatsApp} alt="WhatsApp" /></span>
            WhatsApp
          </WhatsAppButton>
        </Container>
      </VisitSection>
    </>
  )
}

export default Contact

