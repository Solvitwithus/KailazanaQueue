
import { Link } from 'react-router-dom';
import med from './assets/medlogo.png';
import React, { useState } from 'react'
import Menu from './assets/hamburger.png';
import './contacts.css';
import IG from './assets/igg.png'
import FB from './assets/fbb.png'
import Twit from './assets/twit.png'
import Linked from './assets/link.png'
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
      <div>


<h2 id="header">Contacts</h2>
<p id="introchannel">Feel free to reach us through the following channels</p>

<div id="icons">
  <img src={IG} alt='Instagram' class="iconimgg"/>
  <img src={FB} alt='Facebook' class="iconimgg"/>
  <img src={Twit} alt='Twitter' class="iconimgg"/>
  <img src={Linked} alt='LinkedIn' class="iconimgg"/>

</div>
<p id="introchannel">You can also contact us through email or phone</p>
<p id="introchannel">kailazanammchospial.ac.ke</p>
<p id="introchannel">+254 756439087</p>
<hr/>
<h2 id="header">leave Feedback</h2>
<hr/>
      </div>
      <div id="bottom">
              <div id="experience">
                 <p id="star">Rate your experience</p>
                 
            <span class="stars">&#9733;</span>
            <span class="stars">&#9733;</span>
            <span class="stars">&#9733;</span>
            <span class="stars">&#9733;</span>
            <span class="stars">&#9733;</span>
            <p id="rightcopy">&copy;2024.Kailazanammc All rights reserved</p>
              </div>
              <div id="formsection">
               <form action='' method='POSt'>
                <div>
                <label for="name">Name:</label>
                <br/>
                <input id="name" name='name' type='text' placeholder='username' required/>
                </div>


                <div>
                <label for="email">Email:</label>
                <br/>
                <input id="name" name='email' type='email' placeholder='email' required/>
                </div>

                <div>
                <label for="email">Comment:</label>
                <br/>
                <input id="comment" name='comment' type='text' placeholder='enter comment' required/>
                </div>
                <button type='reset'> Reset</button>
                <button > Submit</button>
               </form>
              </div>
      </div>
      </section>
    )
}
export default Contact;