import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import parse from 'html-react-parser';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './faq.styles.scss'

const Faq = () =>(
  <Query query={gql`
  {
    faqs {
      edges {
        node {
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
        if (data) {
          let bkg;
          data.heroBackgrounds.edges.map((hbkg, key)=>{
            if (hbkg.node.hbkgMeta.heroPage === 'FAQ') {
             bkg = hbkg.node.hbkgMeta.heroBackground.sourceUrl
            }
            return bkg
          })
          return(
            <div className="row faq-wrap">
              <div className="container clearTop faq-hero"style={{backgroundImage:`url(${bkg})`}} >
                <div className="row faq-copy-wrap justify-content-center align-items-center">
                  <div className="col-10 col-md-6 text-center">
                    <h2>FAQs / Contact Us</h2>
                  </div>
                </div>
              </div>
              <div className="row accordion-wrap">
                <Accordion className="col-12">
                  <h3 className="text-center">FAQs</h3>
                {data.faqs.edges.map((faq, key)=>{
                  return(
                    <AccordionItem key={key}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        {faq.node.title}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {parse(faq.node.content)}
                    </AccordionItemPanel>
                    </AccordionItem>
                  )
                })}
                </Accordion>
              </div>
              <div className="row">
                <div className="col-6">
                  <img className="img-fluid" src="http://localhost/acb/wp-content/uploads/2021/03/101200961_1455871071258939_1684034725609648687_n.jpg" alt=""/>
                </div>
                <div className="col-6">
                  <h3>Contact Us</h3>
                  <p>
                  <i className="fas fa-map-marker-alt"></i> PMB # 418 <br/>
                    335 E Albertoni St <br/>
                    Ste 200 <br/>
                    Carson, CA 90746
                  </p>
                  <p><a href="mailto:info@angelcitybrigade.net">info@angelcitybrigade.net</a> </p>
                </div>
              </div>
            </div>
            )
        }
      }
    }

  </Query>
)
export default Faq