import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import parse from 'html-react-parser';
import './chants.styles.scss'

const Chants = () =>(
  <Query query={gql`
  {
    chants {
      edges(first:50) {
        node {
          chantMeta {
            url
            lyrics
          }
          title
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

        if(data.chants){
          console.log(data.chants)
          return(
            <div className="row chants-containter">
              <div className="row chant-sheet">
                <h2></h2>
              </div>
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
            )
        }

      }
    }
  </Query>
)
export default Chants;


