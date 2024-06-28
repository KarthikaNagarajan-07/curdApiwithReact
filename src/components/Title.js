import React from 'react';
import './Title.css';
import img from '../images/img.png';
import bankimg from '../images/bankimg.jpeg';

class Title extends React.Component{
    render(){
        return(
       <>
        {/* <div className="row row_clr m-0">
            <div className = "col-sm-4">
                    <img src ={img} className="image_align"></img>                     
            </div>
            <div className = "col-sm-5">
                <h1 className ="bank_head" >YES Bank</h1>
            </div>
        </div> */}

        <div className ="navbar">
            <a href="/dashboard">Dashboard</a>
            {/* <a href="/clients">Clients</a> */}
            {/* <a href="/contact">Contact</a> */}
            {/* <a href="/about">About</a> */}
            <a href ="/form">Add User</a>
        </div>
       </>
        )
    }
}
export default Title;