import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import "../styles/home.css"

export const HomePage = () => {
  const mockImagenes = [
    "https://picsum.photos/id/322/400",
    "https://picsum.photos/id/366/400",
    "https://picsum.photos/id/378/400",
  ]

  return <>
  <Navbar/>
   <h1>INMOBILIARIA</h1>
   <h2>Lo extraordinario esta ahora a tu alcance</h2>
   <Slider imagenes={mockImagenes}></Slider>
   <Footer/>
  </>
}

export default HomePage;
