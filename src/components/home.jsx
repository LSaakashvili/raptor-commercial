import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className='row' id="row1">
          <div className='col'>
            <h2 id='title1'>FORD RAPTOR F-150</h2>
            <p id="desc1">MOST POWERFUL AND BEAUTIFUL PICKUP TRUCK.</p>
            <Link
            className='btn btn-primary'
             id='btn1'
             to="row2"
             activeClass='active'
             smooth={true}
             duration={100}
             >MORE
             </Link>
          </div>
        </div>
    )
}

export default Home;