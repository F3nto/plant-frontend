import React from 'react'
import Header from "../components/Header"
import PlantCarousel from '../components/PlantCarousel'
import PlantCategories from '../components/PlantCategories'
import AboutIndoor from "../components/AboutIndoor"
const Home = () => {
  return (
  <>
    <Header/>
    <PlantCarousel/>
    <PlantCategories/>
    <AboutIndoor/>
  </>
  )
}

export default Home

