import React, {useContext} from 'react'
import Title from './components/Title'
import Button from './components/Button'

import coverBlack from './images/coverblack.jpg'
import coverColor from './images/covercolor.jpg'
import logoBlack from './images/logoblack.jpg'
import logoColor from './images/logocolor.jpg'

import {ThemeContext} from './context/themeContext'


export default function ElectionTrump() {

    const {theme, toggleFunction} = useContext(ThemeContext)

    const coverPhotoStyle = {
        width: "750px",
    }

    const logoStyles = {
        width: "350px",
        position: "absolute",
        top: "40vh",
        left: "10vw"
    }
    
  return (
    <div style={{width: "100vw", height: "100vh"}} className={theme === "light" ? `light-bg` : `dark-bg`}>

      <Title title="US Election 2024"/>
      <Button />
      <div style={{
        width: "750px",
        margin: "2rem auto 0",
        borderRadius: "10px",
      }}>
        <img style={coverPhotoStyle} src={theme === "light" ? coverColor : coverBlack}/>
      </div>
      <div>
        <img style={logoStyles} src={theme === "light" ? logoColor :logoBlack}/>
      </div>
    </div>
  )
}
