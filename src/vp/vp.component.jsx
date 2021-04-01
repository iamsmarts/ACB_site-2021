import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import './vp.styles.scss'

const Vp = ()=>(
  <Query query={gql`
  {
    heroBackgrounds {
      edges {
        node {
          hbkgMeta {
            heroPage
            heroBackground {
              sourceUrl
            }
            heroTitle
          }
        }
      }
    }
  }
  `
  }>
  {
    ({loading, error, data})=>{
      if (loading) {
        return <h1>LOADING...</h1>
      }
      if(error){
        console.log(error)
        return<h1>something broke</h1>
      }
      if(data){
        let bkg, heroTt;
        data.heroBackgrounds.edges.map((hbkg, key)=>{
          if (hbkg.node.hbkgMeta.heroPage === 'VP') {
            bkg = hbkg.node.hbkgMeta.heroBackground.sourceUrl
            heroTt = hbkg.node.hbkgMeta.heroTitle
          }
          return bkg
        })
        return(
          <div className="row vp-wrap">
            <div className="container clearTop vp-hero" style={{backgroundImage:`url(${bkg})`}}>
              <div className="tint"></div>
            <div className="row hero align-items-center vp-copy">
            <div className="col-12 col-md-10">
                <h2>{heroTt}</h2>
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
    }
  }
  </Query>
)
export default Vp
