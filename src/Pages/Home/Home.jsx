import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="Homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Home