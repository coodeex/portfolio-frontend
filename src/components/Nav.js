import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className="menu_wrapper">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a>
            <ul>
              <li>
                <a href="/about/#timeline"><h3>Timeline</h3></a>
              </li>
              <li>
                <a href="/about/#projects"><h3>Projects</h3></a>
              </li>
              <li>
                <a href="/about/#skills"><h3>Skills</h3></a>
              </li>
            </ul>
          </li>
          {/* <li><a href="/play">Play</a>
            <ul>
              <li>
                <a href="/"><h3>Contacts</h3></a>
              </li>
              <li>
                <a href="/"><h3>Help</h3></a>
              </li>
            </ul>
          </li>
          <li><a href="/Testpage">Testpage</a></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Nav