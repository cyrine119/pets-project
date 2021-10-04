
import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer'
import { PreFooter } from './PreFooter'


const Home = () => {
    return (
        <div>

<div>
<h1 className="p-title"><span style={{color:"#00818e"}}>ENERIS </span><span style={{fontFamily:"exo", fontSize:"30px"}}>Friends Of Animals</span></h1>
</div>    
   

<div className="part2">
  <Carousel style={{width:"100%", height: "50%", paddingTop:"35px"}}>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* eslint-disable-next-line  */}
      <a href="http://www.veterinairedelebisey.com/article-veterinaire-118-1-les-bienfaits-de-nos-animaux-de-compagnie"><h3 className="title-slide">The benefits of owning a pet</h3></a>
      <a href="http://www.veterinairedelebisey.com/article-veterinaire-118-1-les-bienfaits-de-nos-animaux-de-compagnie" ><h5 className="slide-more"> | READ MORE |</h5></a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/slide2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* eslint-disable-next-line  */}
      <a><h3 className="title-slide">How to take care of our pets</h3></a>
      <a href="https://www.fundacion-affinity.org/fr/chiens-chats-et-personnes/jai-un-animal-de-compagnie/soins-indispensables-pour-votre-animal-de" ><h5 className="slide-more"> | READ MORE |</h5></a>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/slide3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     {/* eslint-disable-next-line  */}
      <a><h3 className="title-slide">Homeless animals</h3></a>
      <a href="https://www.dosomething.org/us/facts/11-facts-about-animal-homelessness" > <h5 className="slide-more">| READ MORE |</h5> </a>
    </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>

<div className="part1">
  <img src="./images/abt-part.jpg" alt="" style={{height:"auto", width:"50%", opacity:"90%"}} />
  <div className="abt-txt">
    <h2 style={{color:"black", fontWeight:"bold", paddingLeft:"85px", paddingTop:"110px"}}>Who We Are, What We Do</h2>
    <p style={{fontSize:"20px", color:"black", fontFamily:"exo", paddingLeft:"33px", paddingTop:"30px"}}>ENERIS Friends Of Animals is a non-profit animal rights organization.</p>
    <p style={{paddingLeft:"33px", color:"black"}}>Our goal is to protect abandoned and abused animals.</p>
    <Button className="abt-link" href="http://localhost:3000/about">About Us <i class="fas fa-angle-double-right" style={{paddingLeft:"7px"}}></i></Button>
  </div>
</div>

<div className="h-q" >
  <img style={{width:"100%", height:"420px"}} src="./images/home-q.jpg" alt="" />
</div>

<PreFooter/>
<Footer/>

        </div>
    )
}

export default Home

