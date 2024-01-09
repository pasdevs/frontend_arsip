import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

const Footer = () => {
  return (
    <div style={{ fontSize: "12px"}}>
      @ 2024 <b><a href='https://sptik.unpas.ac.id/' style={{ textDecoration: "none", color: "#38B2AC" }}>Creative LP2TIK Junior</a></b> made with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> for a better web.
    </div>
  )
}

export default Footer