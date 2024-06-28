import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Check.css';


class Check extends React.Component {


    render() {
        return (
            <>

                <div className="head_align">HDFC BANK</div>
                <div className="top_nav" >
                    <NavLink className="text_edit" to={"/home"}>
                        Home
                </NavLink>

                    <NavLink className="text_edit" to={"/dashboard"}>
                        Dashboard
                </NavLink>

                    <NavLink className="text_edit" to={"/adduser"}>
                        Adduser
                </NavLink>

                </div>
            </>
        )
    }
}
export default Check;