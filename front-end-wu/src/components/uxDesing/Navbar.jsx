import React, {useState} from "react";
import '../../style/navbar.css';
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";



const Navbar = () =>{

    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const isAdmin = ApiService.isAdmin();
    const isAuthenticated = ApiService.isAuthenticated();

    const handleSearchChange =(e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchSubmit = async (e) =>{
        e.preventDefault();
        navigate(`/?search=${searchValue}`)
    }

    const handleLogout = () => {
        const confirm = window.confirm("Are you sure you want to logout? ");
        if(confirm){
            ApiService.logout();
            setTimeout(()=>{
                navigate('/login')
            }, 500);
        }
    }

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" > <img src="data:image/png;base64,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" alt="WUnew" /></NavLink>
            </div>
            {/* SEARCH FORM */}
            <form className="navbar-search" onSubmit={handleSearchSubmit}>
                <input type="text" 
                placeholder="Search products" 
                value={searchValue}
                onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>

            <div className="navbar-link">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/categories" >Categories</NavLink>
                {isAuthenticated && <NavLink to="/profile" >My Account</NavLink>}
                {isAdmin && <NavLink to="/admin" >Admin</NavLink>}
                {!isAuthenticated && <NavLink to="/login" >Login</NavLink>}
                {isAuthenticated &&<NavLink onClick={handleLogout} >Logout</NavLink>}
                <NavLink to="/cart">Cart</NavLink>
            </div>
        </nav>
    );

};
export default Navbar;












