import React from 'react'
import Profile from './Profile'
import Skills from './Skills'
import About from './About'

const Home = () => {
  return (
    <div>
        <Profile />
        <hr />
        <Skills />
        <hr />
        <About />
    </div>
  )
}

export default Home