import React from 'react';



  const videoSet = (video) => {
    return (
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            height: "100%",
            left: "-50%",
            top: 0
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      );
    
  }
  
  export default videoSet;