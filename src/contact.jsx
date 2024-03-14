
import { Link } from 'react-router-dom';
import med from './assets/medlogo.png';
import React, { useState } from 'react'
import Menu from './assets/hamburger.png';
function Contact(){
  const [showmenu,setshowmenu] = useState(false);
    return(
        <section>
             
             <nav>
      <div id='navigationcontent'>
        <img src={med} alt='medical logo' class='medicalimage'/>
        <Link to='/' activeClassName="active" className='desktopmenu'>Home</Link>
        <Link to='/services' activeClassName="active" className='desktopmenu'>Services</Link>
        <Link to='/staff' activeClassName="active" className='desktopmenu'>Staff</Link>
        <Link to='/appointment' activeClassName="active" className='desktopmenu'>Appointment</Link>
        <Link to='/news' activeClassName="active" className='desktopmenu'>News</Link>
        <Link to='/contact' activeClassName="active" className='desktopmenu'>Contact</Link>
      </div>
      <img src={Menu} alt='menu' class='hamburger' onClick={()=>setshowmenu(!showmenu)}/>
      <div class ='navmenu' style = {{display:showmenu? 'flex':'none'}}>
        <Link to='/' activeClassName="active" className='desktopmenu'  class='phonemenu' onClick={()=>setshowmenu(false)}>Home</Link>
        <Link to='/services' activeClassName="active" className='desktopmenu'  class='phonemenu' onClick={()=>setshowmenu(false)}>Services</Link>
        <Link to='/staff' activeClassName="active" className='desktopmenu'  class='phonemenu' onClick={()=>setshowmenu(false)}>Staff</Link>
        <Link to='/appointment' activeClassName="active" className='desktopmenu'  class='phonemenu' onClick={()=>setshowmenu(false)}>Appointment</Link>
        <Link to='/news' activeClassName="active" className='desktopmenu'  class='phonemenu' onClick={()=>setshowmenu(false)}>News</Link>
        <Link to='/contact' activeClassName="active" className='desktopmenu'  class='phonemenu' onClick={()=>setshowmenu(false)}>Contact</Link>
      </div>
      </nav>
      </section>
    )
}
export default Contact;