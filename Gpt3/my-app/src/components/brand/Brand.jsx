import React from 'react'
import {google,slack,atlassian,dropbox,shopify} from "../brand/import"
import "./brand.css"

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google png"></img>
      </div>
      <div>
        <img src={slack} alt="slack png"></img>
      </div>
      <div>
        <img src={atlassian} alt="atlassian png"></img>
      </div>
      <div>
        <img src={dropbox} alt="dropbox png"></img>
      </div>
      <div>
        <img src={shopify} alt="shopify png"></img>
      </div>
    </div>
  )
}

export default Brand
