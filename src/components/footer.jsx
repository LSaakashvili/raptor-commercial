import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
          <div className='col' style={{ marginLeft:"2%" }}>
            <div className='icon' style={{ width:"120px", height:"50px", marginLeft:"0px" }}></div>
            <h2 style={{ marginTop:"40px" }}>FORD RAPTOR F-150</h2>
          </div>
          <div className='col'>
              <ul style={{marginTop:"-40px", color:"white"}}>
              <li style={{ marginLeft:"70px", color:"white"}}>
              
            <Link
             to="row1"
             activeClass='active'
             smooth={true}
             duration={300}
             >HOME
             </Link>
  
              </li>
              <li style={{ marginLeft:"70px", color:"white"}}>
                
            <Link
             to="row2"
             activeClass='active'
             smooth={true}
             duration={200}
             >RELIABILITY
             </Link>
  
              </li>
              <li style={{ marginLeft:"70px", color:"white"}}>
  
                
            <Link
             to="row3"
             activeClass='active'
             smooth={true}
             duration={100}
             >POWER
             </Link>
  
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Footer;