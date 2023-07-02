import React from 'react'
import Header from "../components/Header"
import PlantCarousel from '../components/PlantCarousel'
import PlantCategories from '../components/PlantCategories'
import AboutIndoor from "../components/AboutIndoor"
import IndoorCategories from '../components/IndoorCategories'

const Home = () => {
  return (
  <>
    <Header/>
    <PlantCarousel/>
    <PlantCategories/>
    <AboutIndoor/>
    <IndoorCategories/>
  </>
  )
}

export default Home

