import './navigation.css';
import {Link} from 'react-scroll';
function Navigation(){
  
    return(
        <section>
            <div id='introcontent'>
              
                <Link activeClassName="active" offset={-100} to='' delay={500}  spy={true} smooth={true} class='desktopmenu'>Home</Link>
                <Link activeClassName="active" offset={-100} to='' delay={500}  spy={true} smooth={true} class='desktopmenu'>Services</Link>
                <Link activeClassName="active" offset={-100} to='' delay={500}  spy={true} smooth={true} class='desktopmenu'>Staff</Link>
                <Link activeClassName="active" offset={-100} to='' delay={500}  spy={true} smooth={true} class='desktopmenu'>Appointment</Link>
                <Link activeClassName="active" offset={-100} to='' delay={500}  spy={true} smooth={true} class='desktopmenu'>News</Link>
                <Link activeClassName="active" offset={-100} to='' delay={500}  spy={true} smooth={true} class='desktopmenu'>Contact</Link>
            </div>
           
        </section>
        
    )
}
export default Navigation;