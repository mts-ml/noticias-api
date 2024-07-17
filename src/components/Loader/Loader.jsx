import React from 'react'
import { ProgressBar } from 'react-loader-spinner'

import './styles.css'


export const Loader = () => {
   return (
      <div id="loader">
         <ProgressBar
            visible={true}
            height="80"
            width="80"
            barColor='#1ab1b6b0'
            borderColor='skyblue'
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
         />
      </div>
   )
}
