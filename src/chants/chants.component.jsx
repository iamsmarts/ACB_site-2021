import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import ReactPlayer from 'react-player'
import parse from 'html-react-parser';
import './chants.styles.scss'

const Chants = () =>(
  <Query query={gql`
  {
    chants( first: 500 ) {
      edges {
        node {
          title
          chantMeta {
            url
            lyrics
          }
        }
      }
    }
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
        if(loading){
          return(<p>Loading...</p>)
        }
        if(error){
          console.log(error)
        }
        if(data.chants){
          let bkg, heroTt;
          data.heroBackgrounds.edges.map((hbkg, key)=>{
            if (hbkg.node.hbkgMeta.heroPage === 'Chants') {
              console.log(hbkg.node.hbkgMeta.heroTitle)
             bkg = hbkg.node.hbkgMeta.heroBackground.sourceUrl
             heroTt = hbkg.node.hbkgMeta.heroTitle
            }
            return bkg
          })
          return(
            <div className="row">
              <div className="container clearTop chants-containter" style={{backgroundImage:`url(${bkg})`}}>
                <div className="row chant-sheet align-items-center">
                  <div className="col-12 col-md-10">
                  <h2>{heroTt}</h2>
                  <a href="http://data.angelcitybrigade.net/wp-content/uploads/2021/03/ACB121-Chants-2019.pdf" download className="btn btn-light"><i class="far fa-file-pdf"></i> Download the chant sheet</a>
                  </div>
                </div>
              </div>
              <div  className="row chant-chants">
                {data.chants.edges.map((chant, key)=>{

                  return(
                    <div className="col-sm-12 col-md-6 chant" key={key}>
                      <div className="chant-wrap">
                      <h3>{chant.node.title}</h3>
                      {parse(chant.node.chantMeta.lyrics)}
                      <ReactPlayer className="reactPlayer"
          url={chant.node.chantMeta.url}
          />

                      </div>
                    </div>
                  )
                })}
                </div>
            </div>
            )
        }

      }

    }
  </Query>
)
export default Chants;


