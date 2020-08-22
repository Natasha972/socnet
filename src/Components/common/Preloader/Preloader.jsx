import React from 'react';
import './loaderStyles.css';
import preloader from '../../../images/preloader.svg'

let Preloader= ()=> {
  return (
    <div className="preloader">
      <img alt="preloader"  src={preloader}/>
    </div>
  )
}

export default Preloader;