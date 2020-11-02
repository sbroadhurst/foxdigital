import React from 'react'
import './App.css'
import ProfileContext from './contexts/ProfileContext'
import Layout from './components/Layout'

const App = () => {
  return (
    <ProfileContext>
      <Layout></Layout>
    </ProfileContext>
  )
}

export default App
