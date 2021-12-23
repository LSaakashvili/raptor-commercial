import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [ position, setPosition ] = useState("absolute");
  const visibilityNav = () => {
    if (window.pageYOffset > 200) {
      setPosition("fixed");
    }
    else{
      setPosition("absolute");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", visibilityNav);
  }, [])
    return (
        <nav className='nav' style={{ position:position, justifyContent:"space-between", backgroundColor:position === "fixed" && "white" }}>
        <div className='col'>
          <div className='icon'></div>
        </div>
        <div className='col'>
          <ul>
            <li>
          <Link
           to="row1"
           activeClass='active'
           smooth={true}
           duration={100}
           >MORE
           </Link>
            </li>
            <li>
          <Link
           to="row2"
           activeClass='active'
           smooth={true}
           duration={200}
           >RELIABILITY
           </Link>
            </li>
            <li>
          <Link
           to="row3"
           activeClass='active'
           smooth={true}
           duration={300}
           >POWER
           </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav;