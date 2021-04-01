import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import parse from 'html-react-parser';
import './about.styles.scss'

const About = () =>(
  <Query query={gql`
  {
    acbAbout(idType: SLUG, id: "angel-city-brigade") {
      acbAboutMeta {
        acbAboutUsCopy
        fieldGroupName
      }
      title
    }
    boardMembers {
      edges {
        node {
          boardMemberMeta {
            boardMemberPhoto {
              sourceUrl
            }
          }
          title
          content
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
  }`
  }>
    {
      ({loading, error, data})=>{
        if (loading) {
          return<h1>loading...</h1>
        }
        if (error) {
          console.log(error)
        }
        if (data) {
          let bkg, heroTt;
          data.heroBackgrounds.edges.map((hbkg, key)=>{
            if (hbkg.node.hbkgMeta.heroPage === 'About') {
              bkg = hbkg.node.hbkgMeta.heroBackground.sourceUrl
              heroTt = hbkg.node.hbkgMeta.heroTitle
            }
            return bkg
          })
          return <div className="row">
            <div className="container clearTop about-hero" style={{backgroundImage:`url(${bkg})`}}>
              <div className="row hero-wrap  align-items-center" >
                <div className="col-12 col-md-10">
                <h2>{heroTt}</h2>

                </div>
              </div>
            </div>
            <div className="row about-copy-wrap">
              <div className="col-12 about-copy">
                <h3 className="text-center">{data.acbAbout.title}</h3>
                <p>{data.acbAbout.acbAboutMeta.acbAboutUsCopy}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h3>The Board</h3>
              </div>
              {data.boardMembers.edges.map((member, key)=>{

                return (
                  <div key={key} className={(key < 3) ? 'col-6 col-md-4 bmember' : 'col-6 col-md-3 bmember' }>
                    <img className="img-fluid img-thumbnail" src={member.node.boardMemberMeta.boardMemberPhoto.sourceUrl} alt=""/>
                    <h3 className="text-center">{member.node.title}</h3>
                    {parse(member.node.content)}
                  </div>
                )
              })}
            </div>
          </div>
        }else{
          return<h1>nothing happened</h1>
        }
      }
    }
  </Query>
)
export default About