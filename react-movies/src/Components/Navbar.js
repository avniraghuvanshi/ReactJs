import React,{useState} from "react";
import { useNavigate , NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar = () =>{
    const navigate = useNavigate();
    const[query , setQuery] = useState('');
    const searchForMovie = (e) =>{
        e.preventDefault();
        navigate('search' , {state: query});
    }
    return(
        <div className="navbar">
            <NavLink to={''} className="nav-logo">FlixBox</NavLink>
            <form onSubmit={searchForMovie}>
                <input type="text" onChange={e=>{setQuery(e.target.value)}} value={query} name="search" placeholder="Search..."></input>
            </form>
        </div>
    );
}

export default Navbar;