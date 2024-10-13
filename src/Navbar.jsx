import './Nav.css'
function Navbar(){
    return(
        <nav className='navbar'>
            <h1 className="name">Bishnupada Kamila</h1>
            <div className='container'>
            <a href="" className='content'>Home</a>
            <a href="" className='content'>Projects</a>
            <a href="" className='content'>Resume</a>
            <a href="" className='content'>Contacts</a>
            </div>
            <div>
               <button>SignUp</button>
                <button>SignIn</button>
            </div>
        
        </nav>
    )
}
export default Navbar

