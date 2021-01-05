import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import Video from '../components/Video';
import './home.css'
import Typical from 'react-typical'
import MobileNav from '../components/MobileNav';



const Home = () => {
  const [size, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // }
  }, [])

  const AboutMe = () => {
    return (
      <div>
        <Typical className="typical"
          steps={[
            '', 1000,
            'Hello', 1500, //👋
            'I like to create websites', 1000,
            'I\'m studying at Aalto University', 1500,
            'I want a job', 1000
          ]}
          loop={Infinity}
        />
      </div>
    )
  }

  // const ImageOfMe = () => {
  //   return (
  //     <img src={require('../images/picture-me.jpg')}
  //       alt="Pic of Juhani"
  //     ></img>
  //   )
  // }



  return (
    <div className="home">
      <div className="video">
        <Video />
      </div>
      {
        size < 500
          ? <>
            <MobileNav />
          </>
          : size < 1023
            ? <>
              <MobileNav />
            </>
            : <>
              <div className="nav">
                <Nav />
              </div>
            </>
      }

      <div className="container">
        <div className="name">
          Juhani Lehto
        </div>
        <AboutMe />
      </div>
      {/* <div className="pic">
        <ImageOfMe />
      </div> */}
    </div>
  );
}

export default Home