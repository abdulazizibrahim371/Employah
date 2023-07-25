import React, {useState} from 'react'
import '../../userRegistry/Register/register.css';
import register1 from'../../images/register.jpg'
//import Register from './Register';
import Login from './../Login/Login';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/Login')
    })
        .catch(err=>console.log(err))
        
    }

    return( 
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                   <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Name</strong>
                    </label>
                        <input
                        type='text'
                        placeholder='Enter Name'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div> 
                    <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>password</strong>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter password'
                        autoComplete='off'
                        name='password'
                        className='form-control rounded-0'  
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                    </form>
                    <p>Already have an account?</p>
                    <Link to="/login" type='submit' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </Link>
                    
            </div>
        </div>
        );
}



        {/* <section className='register-container'>
        <div>
        <h1 className='register-h1'>Register</h1>
        <div>
            <img src= {register1} alt='register' className="register-image"/>
        </div>
        </div>
        <form for="" className='forms'>
            <div>
                {/* <div className='label-container'><label>First name</label></div>
                <input className='register-inputs'  type = "text" name= "firstname" placeholder = "firstname"></input>
            </div>
            <div>
            <div className='label-container'><label>Last name</label></div>
                <input className='register-inputs' type = "text" name= "lastname" placeholder = "lastname"></input>
            </div> */}
             {/* <div className='login-label-container'><label>Email</label></div>
             <input 
                className='login-inputs'  
                type = "text" 
                name= "email" 
                placeholder = "email"
                value={email}
                onChange={handleEmailChange}
                />
            </div>
            <div>
            <div className='label-container'><label>Password</label></div>
                <input className='register-inputs' type = "password" name= "password" placeholder = "password"></input>
            </div>
            <div>
            <div className='label-container'><label>Confirm Password</label></div>
                <input className='register-inputs' type = "password" name= "cpassword" placeholder = "confirm password"></input>
            </div>
            <div className='btn'>
                

            <button className='register-btn'>register</button>
            </div>

                <p>Already have an account? 
                    <span className='reg-login'> Log in</span>
                
                </p> 

        </form>
        
        </section>
        </> */} 

    
        

    

export default Register;