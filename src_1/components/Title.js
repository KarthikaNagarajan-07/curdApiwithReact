import React from 'react';
import './Title.css';
import img from '../images/img.png';
import bankimg from '../images/bankimg.jpeg';

class Title extends React.Component{
    render(){
        return(
    //    <body>
        // <header className='header'>
        //      <h1 className='h1'>YES Bank</h1> 
        //     </header>
        <div>
            <nav>
            <a href="/dasboard">Dashboard</a>
            <a href="/clients">Clients</a>
            <a href="/contact">Contact  </a>
            <a href="#">About</a>
            <a href ="/form">Add User</a>
            </nav>
        </div>
        // </body>
        )
    }
}
export default Title;