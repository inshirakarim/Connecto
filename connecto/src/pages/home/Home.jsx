import React from 'react'
import './home.css'
import Stories from "../../components/Stories/Stories"
import Posts from "../../components/Posts/Posts"

function Home() {
  return (
    <div className='home'>
      <Stories />
      <Posts/>
    </div>
  )
}

export default Home