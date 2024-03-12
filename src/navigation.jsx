import './navigation.css';
import Calendar from './calendar';
import { Link } from 'react-router-dom';
import med from './assets/medlogo.png';
import Slideshow from './slideshow';

function Navigation() {
    const images = [
     
       ' https://th.bing.com/th/id/OIP.Bzttx9EWdmsHcU5m4RjBMAHaFh?w=234&h=180&c=7&r=0&o=5&pid=1.7',
      'https://th.bing.com/th/id/OIP.GYvGGm_yYh3sNfUgAjod2AHaE7?w=249&h=180&c=7&r=0&o=5&pid=1.7',
      'https://th.bing.com/th/id/OIP.0ygQJUpLY9fXwu1tozFn8gHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
      'https://th.bing.com/th/id/OIP.8wx-bBHnEfUwoy207zdueQHaFW?w=222&h=180&c=7&r=0&o=5&pid=1.7',
      'https://th.bing.com/th/id/OIP.FgYKlot7yUDDmd5kJN6FjAHaFW?rs=1&pid=ImgDetMain',
      'https://c8.alamy.com/comp/2D9N337/african-american-female-paramedic-standing-in-front-of-ambulance-car-2D9N337.jpg'
    ];
  return (
    <section>
      <div id='navigationcontent'>
        <img src={med} alt='medical logo' class='medicalimage'/>
        <Link to='/' activeClassName="active" className='desktopmenu'>Home</Link>
        <Link to='/services' activeClassName="active" className='desktopmenu'>Services</Link>
        <Link to='/staff' activeClassName="active" className='desktopmenu'>Staff</Link>
        <Link to='/appointment' activeClassName="active" className='desktopmenu'>Appointment</Link>
        <Link to='/news' activeClassName="active" className='desktopmenu'>News</Link>
        <Link to='/contact' activeClassName="active" className='desktopmenu'>Contact</Link>
      </div>
      <div className="scrolling-text">Kailazana <span id='mmc'>MMC</span></div>
      <div>
        <p id='introcont'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How's your day going? <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do you want to check health on <span id='mmc'>MMC</span>  </p>
       <div id='btn'> <button>Lets take your queue number</button> </div>
      </div>
      <div id='bottom'>
      <Slideshow images={images} />
      <div id='calendar'> <Calendar/></div>
      </div>
    </section>
  )
}

export default Navigation;