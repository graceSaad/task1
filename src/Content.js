import React from 'react';
import './Home.css';
import Service from './Service';
import dog from './assets/dog.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Content = () => {

    return(

        <div className='k'>
        <img src={dog} className='dog'/>
        <p className='pp'>  Your<b className='p'> Pet</b> , </p>
        <p className='ppp'>   our priority</p>


        <Button className='but' style={{ backgroundColor: '#d1a8a8',border:'none' ,color: 'rgb(96, 74, 46)',fontFamily:'cursive' }} variant="primary" size="lg" active >
        Make a Reservation
        </Button>{' '}
        <Button className='butt' style={{backgroundColor: 'rgb(96, 74, 46)'}} variant="secondary" size="lg" active>
        learn more
        </Button>
       
        </div>
      

    )
;

};
export default Content 