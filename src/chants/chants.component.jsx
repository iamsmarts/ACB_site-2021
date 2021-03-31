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

          return(
            <div className="row">
              <div className="container clearTop chants-containter">
                <div className="row chant-sheet justify-content-center">
                  <div className="col-12 col-md-6">
                  <h2>ACB Chants</h2>
                  <a href="http://localhost/acb/wp-content/uploads/2021/03/118574113_350102809354165_2053583023785038534_n.jpg" download className="btn btn-light"><i class="far fa-file-pdf"></i> Download the chant sheet</a>
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


