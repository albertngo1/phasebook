import React from 'react';



const AdPage = () => {
  return(
    <div className="main-page-ad">
      <div className="ad-space-1-wrap">
        <div className="ad-space-1b">
          <div className="ad-sponsored">SPONSORED</div>
            <img className="ad-github-pic" src="https://s3.us-east-2.amazonaws.com/phasebook-dev/baracktocat.jpg" />
            <label>
              <a href="https://github.com/albertngo1">
              <span>
              Like what you see? Visit my github!
              </span>
            </a>
              </label>
        </div>
      </div>
      <div className="ad-space-2-wrap">
        <div className="ad-space-2">
          App Academy - Phasebook - July 2017
        </div>
      </div>
      <div className="ad-space-3-wrap">
        <div className="ad-space-3">
          React · Redux · Ruby · Rails · Javascript · AWS   CSS · HTML · jQuery
        </div>
      </div>
      <div className="ad-space-4-wrap">
        <div className="ad-space-4">
          <a href="https://ngoalbert.com">
          by Albert Ngo
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdPage;
