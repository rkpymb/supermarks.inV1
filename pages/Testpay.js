import React from 'react'
import ReactPlayer from 'react-player/lazy'
const Testpay = () => {
  return (
    <div>
          <p>player</p>
          <div>
              <ReactPlayer controls
                  playing
                  
              
                  
                  url='http://localhost:8000/live/live.flv' />
          </div>
    </div>
  )
}

export default Testpay
