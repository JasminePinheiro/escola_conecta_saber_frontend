import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import { AppContainer, Container, Text } from './styles/GlobalStyles'

interface PrivateRouteProps {
  children: React.ReactNode
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated, loading } = useAuth()
  
  if (loading) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    )
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />
}

interface TeacherRouteProps {
  children: React.ReactNode
}

function TeacherRoute({ children }: TeacherRouteProps) {
  const { isAuthenticated, user, loading } = useAuth()
  
  if (loading) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    )
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  
  if (user?.role !== 'professor') {
    return <Navigate to="/" />
  }
  
  return <>{children}</>
}

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-post"
            element={
              <TeacherRoute>
                <CreatePost />
              </TeacherRoute>
            }
          />
          <Route
            path="/edit-post/:id"
            element={
              <TeacherRoute>
                <EditPost />
              </TeacherRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <TeacherRoute>
                <Admin />
              </TeacherRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App

