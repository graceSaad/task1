import React from 'react';
import './Service.css'
import { MdOutlinePets } from "react-icons/md";
import { BsClipboardHeart } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { BiSolidDog } from "react-icons/bi";
import { GiJumpingDog } from "react-icons/gi";
import { TiScissorsOutline } from "react-icons/ti";
import { FaUserDoctor } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';



const Service = () => {


return(

<div>
<p className='m'>WE ARE BEST IN </p>
<div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Button className='service-btn' variant="primary" size="lg">
                        Daycare
                        <br/>
                        <MdOutlinePets />
                    </Button>
                </div>
                <div className="col-md-2">
                    <Button className='service-btn' variant="primary" size="lg">
                        Walking
                        <br/>
                        <BiSolidDog />

                    </Button>
                </div>
                <div className="col-md-2">
                    <Button className='service-btn' variant="primary" size="lg">
                        Grooming
                        <br/>
                        <TiScissorsOutline />
                    </Button>
                </div>
                <div className="col-md-2">
                    <Button className='service-btn' variant="primary" size="lg">
                        Boarding
                        <br/>
                        <BsClipboardHeart />
                    </Button>
                </div>
                <div className="col-md-2">
                    <Button className='service-btn' variant="primary" size="lg">
                        Training
                        <br/>
                        <GiJumpingDog />

                    </Button>
                </div>
                <div className="col-md-2">
                    <Button className='service-btn' variant="primary" size="lg">
                        Veterinary 
                        <br/>
                        <FaUserDoctor />
                    </Button>
                </div>
            </div>
        </div>


</div>

);
};
export default Service ;