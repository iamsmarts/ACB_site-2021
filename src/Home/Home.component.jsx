import React from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Home.styles.scss'


function Home() {
  return (
    <div className="row">
      <div className="container clearTop home">
        <div className="row hero align-items-center">
          <div className="col-12 col-md-6">
            <h1>Angel City Brigade</h1>
            <Link className="btn btn-light" to="/chants">Join Us</Link>
          </div>
        </div>
      </div>
      <div className="row acb-about">
        <div className="col-6 about-bkg d-none d-sm-block">

        </div>
        <div className="col-12 col-md-6 align-items-center about-copy">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <p>The Angel City Brigade was created to help establish a festive and vibrant atmosphere in the Dignity Health Sports Park. We are here to stand proudly for 90 minutes, sing our hearts out, and have a good time. Join us in the General Admission area inside the Dignity Health Sports Park and in the grass lawn outside the northwest gate before games! Help support the ACB and the Galaxy by chanting along with them during the next home match!</p>
              <Link to="/about" className="btn btn-dark"> More About Us</Link>
              </div>
            </div>
        </div>
      </div>
      <div className="container acb-video">
          <ReactPlayer
            className="home-video"
            width="100%"
            height="100%"
            controls="false"
            playsinline="true"
            url="https://www.youtube.com/watch?v=YuSFHd5FRWU"
            config={{
              youtube:{
                playerVars:{
                  showinfo:0,
                  modestbranding:0,
                }
              }
            }}
          />
      </div>
      <div className="row home-break">
        <div className="col">
        <h2 className="home-break">Blue, White, and Gold in my heart and soul, we’re Original Angelenos 💙⚪️💛</h2>
        </div>
      </div>
      <div className="row boxes shop-wrap">
        <div className="col-6 home-shop-bkg d-none d-sm-block"></div>
        <div className="col-12 col-md-6 home-shop-copy align-items-center justify-content-center">
          <a href="https://shop.angelcitybrigade.net">
            <h3>Shop</h3>
          </a>
        </div>
      </div>
      <div className="row boxes vp-wrap">
        <div className="col-12 col-md-6 home-vp-copy align-items-center justify-content-center">
          <Link to="/viewing-parties">
            <h3>Viewing Parties</h3>
          </Link>
        </div>
        <div className="col-6 home-vp-bkg d-none d-sm-block"></div>
      </div>
    </div>
  )
}

export default Home
