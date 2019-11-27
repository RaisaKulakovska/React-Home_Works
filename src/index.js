import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Fragment} from 'react';
import Card from './me.jpg';

const App=()=>{
    return(
<Fragment>
<div className="container">

    <header className="row justify-content-center py-3">    
    <h1>CV</h1>    
    </header>
    <main>
        <div className="row top">
            <div className="col-4 text-right">
                <img src={Card} alt="my_card" className="photo "></img>            </div>
            <div className="col-8 main-text pl-4">
               <p className="my_name">Raisa I. Kulakovska</p>
               <p>Rivne, vul. Chekhova,9a, kv. 73 </p>
               <p>Phone: (095)140-76-74, (067)7538518</p>               
               <p>e-mail: RaisaKulakoovska@gmail.com</p>
            </div>
        </div>
 <div className="row content">
     <div className="col">
     <h4>Education:</h4>
    <p>
    - May 2019 - Up to date - student of it-academy “SHAG” Rivne, Ukraine<br></br>
    - Web-design classes student, October 2018 – February 2019, Rivne<br></br>
    - Green Forest School student, Fabruary 2007 – June 2008<br></br>
    - Privet English classes student, September 2005 – November 2006, Kyiv<br></br> 
    - Driver, category B - Courses of drivers, Rivne, 2004<br></br>
    - Master of Science in Hydromelioration, Faculty of water economy , National university of water economy and use of nature, Rivne, Ukraine, 2005</p>

    <h4>Work Experience:</h4>
    <p>
    - August 2005 – 2012 Engineer, Group of Exploitation, Joint-Stock Company “Ukrvodproekt”, Kiev (Delt with calculations, technical drawing)<br></br>
    - 2012 - 2014 – CFI “Tebodin Ukraine” (Delt with technical projects)
    <br></br>
    - 2014 - 2017- Burda Ukraine , Kiev (accountant)<br></br>
    - 2019 - Online supermarket “Torgoborud” (content-manager)</p>   

    <h4>Skills:</h4>
    <p>
    AutoCad, Photoshop, HTML, CSS, SASS, Bootstrap, Node js, React</p>

    <h4>Languages:</h4>
    <p>native Ukrainian, fluent Russian, English Upper-Intermediate.</p>   
       
    <h4>Hobby:</h4>
    <p>reading</p>
     </div>
      

        </div>   
    </main>
</div>
</Fragment>
);
}

ReactDOM.render(<App />, document.getElementById('root'));