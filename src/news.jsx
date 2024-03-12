import { Link } from 'react-router-dom';
import med from './assets/medlogo.png';
function News(){
    return(
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
      </section>
    )
}
export default News;