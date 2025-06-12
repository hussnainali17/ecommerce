import React from 'react'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import MiddleBar from '../components/middle_bar'
import Deals from '../components/Deals'
import Group from '../components/Group'
import Recommended from '../components/Recommended'
import Services from '../components/Services'
import Region from '../components/Region'
import Newletter from '../components/Newletter'
import Footer from '../components/footer'
import Lower from '../components/Lower'
const Home = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <MiddleBar/>
        <Deals/>
        <Group/>
        <Recommended/>
        <Services/>
        <Region/>
        <Newletter/>
        <Footer/>
        <Lower/>
    </div>
  )
}

export default Home