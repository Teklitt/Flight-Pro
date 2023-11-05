import React from 'react'
import Head from 'next/head'

import GalleryCard2 from '../components/gallery-card2'
import NavBar from '@/components/NavBar'

const APIResults = (props) => {
  return (
    <>
    <NavBar/>
      <div className="api-results-container">
        <Head>
          <title>APIResults - Flight Pro</title>
          <meta property="og:title" content="APIResults - Flight Pro" />
        </Head>
        <div className="api-results-pricing">
          <div className="api-results-pricing1">
            <div className="api-results-container01">
              <div className="api-results-container02">
                <h1 className="api-results-text">
                  Delay Probability 
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
                <span className="api-results-text01">
                  Experience the convenience of our &apos;Delay
                  Probability&apos; feature, specifically designed to predict
                  flight delay durations with remarkable accuracy.
                </span>
              </div>
              <div className="api-results-container03">
                <div className="api-results-container04">
                <span className="api-results-text02">1 Hour Delay</span>
                  <span className="api-results-text03 text-red-500">98.9%</span>
                  <span className="api-results-text04">
                    
                    <span> High Chance of cancellation</span>
                  </span>
                  <span className="api-results-text04">
                    <span className="api-results-text05">Flight Number: </span>
                    <span> FFOBGZ</span>
                  </span>
                  <span className="api-results-text07">
                    <span className="api-results-text08">Trip: </span>
                    <span>BWI - SLC</span>
                  </span>
                  <span className="api-results-text10">
                    <span className="api-results-text11">Duration: </span>
                    <span> 3:30pm 5:00pm</span>
                  </span>
                  <button className="api-results-button button">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="api-results-text15">Things To Do In The Airport</h1>
        <div className="api-results-gallery">
          <div className="api-results-container05">
            <div className="api-results-container06">
              <div className="api-results-container07">
                <GalleryCard2
                  rootClassName="rootClassName2"
                  
                  title="Restaurants"
                  description="Grab a bite to eat"
                ></GalleryCard2>
              </div>
              <div className="api-results-container08">
                
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHNob3BzfGVufDB8fHx8MTY5OTE5MTcxNXww&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName3"
                  title="Shops"
                  description="Places to shop"
                ></GalleryCard2>
              </div>
            </div>
            <div className="api-results-container09">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1542883339-f2680a3e3996?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxzaG9wc3xlbnwwfHx8fDE2OTkxOTE3MTV8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName"
                title="Shops"
                description="Places to shop"
              ></GalleryCard2>
            </div>
          </div>
          <div className="api-results-container10">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
              title="Restaurants"
              description="Grab a bite to eat"
            ></GalleryCard2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .api-results-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .api-results-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .api-results-pricing1 {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .api-results-container01 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .api-results-container02 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .api-results-text {
            font-size: 70px;
          }
          .api-results-text01 {
            color: var(--dl-color-gray-500);
            font-size: 20px;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .api-results-container03 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .api-results-container04 {
            flex: 1;
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .api-results-container04:hover {
            transform: scale(1.02);
          }
          .api-results-text02 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .api-results-text03 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-weight: 200;
          }
          .api-results-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .api-results-text05 {
            font-weight: 700;
          }
          .api-results-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .api-results-text08 {
            font-weight: 700;
          }
          .api-results-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .api-results-text11 {
            font-weight: 700;
          }
          .api-results-text13 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .api-results-text14 {
            font-weight: 700;
          }
          .api-results-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .api-results-text15 {
            font-size: 70px;
            box-shadow: rgb(237, 234, 234) 5px 5px 10px 0px;
            font-style: normal;
            font-weight: 800;
          }
          .api-results-gallery {
            width: 1200px;
            height: 1000px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .api-results-container05 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .api-results-container06 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .api-results-container07 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .api-results-container08 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .api-results-container09 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .api-results-container10 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .api-results-container01 {
              align-items: center;
              flex-direction: column;
            }
            .api-results-container02 {
              align-items: center;
            }
            .api-results-text01 {
              text-align: center;
            }
            .api-results-container03 {
              width: 100%;
            }
            .api-results-container10 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .api-results-container01 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .api-results-container03 {
              flex-direction: column;
            }
            .api-results-container04 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .api-results-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .api-results-container06 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .api-results-container01 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .api-results-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .api-results-container05 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default APIResults
