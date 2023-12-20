import React from 'react'

const Footer = () => {
  return (
    <div className="footer" style={{ fontSize: "12px", marginLeft: "-250px" }}>
      @ 2023, Made with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> by <b><a href='https://sptik.unpas.ac.id/' style={{ textDecoration: "none", color: "#38B2AC" }}>Creative LP2TIK Junior</a></b> for a better web.
    </div>
  )
}

export default Footer