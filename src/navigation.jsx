import './navigation.css';
import Net from './assets/net.png';
import React, { useState } from 'react'
import Menu from './assets/hamburger.png';

import med from './assets/medlogo.png';
import { Link, useNavigate } from 'react-router-dom';


import Clock from './assets/clock.png';
function Navigation() {
  const [showmenu,setshowmenu] = useState(false);
  
  const navigate = useNavigate();

  function handleappointment() {
    navigate('/appointment');
  }
  return (
    <section id='section'>
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
      <div className="scrolling-text">Kailazana <span id='mmc'>MMC</span></div>
      <div>
        <p id='introcont'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How's your day going? <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do you want to check health on <span id='mmc'>MMC</span>  </p>
       <div id='btn'> <button  onClick={handleappointment}>Lets take your queue number</button> </div>
      </div>
     <div id='features'>
      <div id='onlinesystem'>
        <img src={Net} alt='network' class='featureimage'/>
        <h3 class='featurehead'>Online System</h3>
        <br/>
        <br/>
        <p class='featuretext'>Our hospital boasts<br/> a thriving digital platform, offering an<br/> extensive online ecosystem <br/>for patient care and services</p>
      </div>

      <div id='time'>
        <img src={Clock} alt='network' class='featureimage'/>
        <h3 class='featurehead'>24 Hours Open</h3>
        <br/>
        <br/>
        <p class='featuretext'>Accessible around the clock, our hospital provides unwavering 24/7 availability, ensuring you receive prompt care whenever you need it</p>
      </div>

      <div id='access'>
        <img src={med} alt='network' class='featureimage'/>
        <h3 class='featurehead'>Easy Access</h3>
        <br/>
        <br/>
        <p class='featuretext'>With a focus on convenience, our hospital offers seamless and hassle-free access, ensuring that healthcare is always within your reach</p>
      </div>

      <div id='care'>
        <img src={med} alt='network' class='featureimage'/>
        <h3 class='featurehead'>Personalized Care</h3>
        <br/>
        <br/>
        <p class='featuretext'>Our hospital goes the extra mile, ensuring individualized treatments and unwavering support for your optimal well-being</p>
      </div>

      <div id='facilities'>
        <img src={med} alt='network' class='featureimage'/>
        <h3 class='featurehead'>More facilities</h3>
        <br/>
        <br/>
        <p class='featuretext'>We have abundance of facilities, providing you with a comprehensive range of services and amenities for your utmost comfort and convenience</p>
      </div>
     </div>
    </section>
  )
}

export default Navigation;