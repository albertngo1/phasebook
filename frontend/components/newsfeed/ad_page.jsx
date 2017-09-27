import React from 'react';



const AdPage = () => {
  return(
    <div className="main-page-ad">
      <div className="ad-space-1-wrap">
        <div className="ad-space-1b">
          <div className="ad-sponsored">SPONSORED</div>
          <a href="https://github.com/albertngo1">
            <img className="ad-github-pic" src="https://s3.us-east-2.amazonaws.com/phasebook-dev/baracktocat.jpg" />
            <label>Like what you see? Visit my github!</label>
          </a>
        </div>
      </div>
      <div className="ad-space-2-wrap">
        <div className="ad-space-2">
          App Academy - Phasebook - July 2017
        </div>
      </div>
      <div className="ad-space-3-wrap">
        <div className="ad-space-3">
          React · Redux · Ruby · Rails · Javascript · AWS · CSS · HTML
        </div>
      </div>
    </div>
  )
}

export default AdPage;
