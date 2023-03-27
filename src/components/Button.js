import React, {useContext} from 'react'

import {ThemeContext} from '../context/themeContext'

import {FaSun} from 'react-icons/fa'
import {FaMoon} from 'react-icons/fa'

export default function Button() {

    const {theme, toggleFunction} = useContext(ThemeContext)

  return (
    <div>
      <button className={`btn ${theme}-bg`} onClick={toggleFunction}>{theme === "light" ? <FaSun className='icon-size '/> : <FaMoon className='icon-size '/>}</button>
    </div>
  )
}
