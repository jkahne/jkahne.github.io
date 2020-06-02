/** @jsx React.DOM */
import React from "react"
// import { annotate } from 'rough-notation';
// import Bio from "./bio"

const Menu = () =>  {
    const [burger, setBurger] = React.useState(false);
    const refContainer = React.useRef(null);

  // React.useEffect(() => {
  //   // annotate(refContainer.current, {type: 'box'}).show()
  // }, [refContainer]);

  return (
    <div className="header-content">
      <h3>
        <a href="/"}>Title</a>
      </h3>
      <nav>
        <div className={`nav-links ${burger ? "nav-active" : ""}`}>
          <div ref={refContainer} >
            <a href="/work" > Work </a>
            <a href="/blog" > Blog </a>
            <a href="/about" > About </a>
            <a href="/contact" > Contact </a>
          </div>
        </div>
        <div className={`burger ${burger ? "burger-x" : ""}`} 
          onClick={() => setBurger(!burger)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div>Copyright ©  Jeremy Kahne</div>
    </div>
  )
}

