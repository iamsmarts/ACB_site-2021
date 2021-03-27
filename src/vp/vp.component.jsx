import React from 'react'
import './vp.styles.scss'
function Vp() {
  return (
    <div className="row vp-wrap">
      <div className="container clearTop vp-hero">
      <div className="row justify-content-md-center align-items-center text-center vp-copy">
        <div className="col-10 col-md-6">
          <h2>Viewing Parties</h2>
        </div>
      </div>

      </div>
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 text-center">
          <p><strong>We're working on confirming partners for 2021
          The map below is from our 2019 partners, we'll update it as soon as we get confirmations.</strong></p>
        </div>
        <div className="col-12">
          <iframe className="vp-map" title="ACB Viewing Party Map" src="https://www.google.com/maps/d/embed?mid=1zjOuFGdO-6GL1QGfcb_0hlPJuu0BAbri" width="640" height="480"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Vp
