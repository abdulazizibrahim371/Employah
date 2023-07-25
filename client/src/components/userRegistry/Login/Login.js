import React, {useState} from 'react';
import '../../userRegistry/Login/login.css';
import login1 from'../../images/login2.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false);
    

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            console.log('please enter both email and password!')
            setLoggedIn(false);
            return;
        }

            axios
            .post('http://localhost:5000/login', { email, password})
            .then(result => {
                console.log(result)
                if(result.data === "success"){
                    navigate('/dashboard')
                }else{
                    console.log('Invalid email or password!')
                    setLoggedIn(false);
    
                    setTimeout(() => {
                        setLoggedIn(null);
                    }, 3000);
                }
        })
            .catch(err=>{
                console.log(err);
                setLoggedIn(false);
    
                setTimeout(() => {
                    setLoggedIn(null);
                }, 3000); 
            });     
        };
        


    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const isLoggedIn = true;
    //     if(isLoggedIn) {
    //         setLoggedIn(true);
    //         navigate("/dashboard");
    //     }else{
    //         alert("Wrong credentials");
    //     }
    // }

//     const handleSubmit = (event) => {
//         event.preventDefault();
    
//     // Send login request to the backend server
//     fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({email, password}),
//     })
//     .then((Response) => Response.json())
//     .then((data) => {
//         // Handle the response from the backend
//         if (data.success) {
//             // Successful login
//             console.log('Login successful!')
//             window.location.href = '/welcome.js';
//         } else {
//             console.log('Invalid email or password!')
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }

    return(
        
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                {loggedIn === false && (
        <div className="alert alert-danger" role="alert">
          Invalid email or password!
        </div>
      )}
                <form onSubmit={handleSubmit}>
                   {/* <div className='mb-3'>
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
                    </div>  */}
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
                        Login
                    </button>
                    </form>
                    <p>Don't have an account?</p>
                    <Link to="/register" type='submit' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Register
                    </Link>
                    
            </div>
        </div>
        );
}
        
        {/* <section className='login-container'>
        <div>
        <h1 className='login-h1'>Login</h1>
        <div>
        <img src= {login1} alt='login' className="login-image"/>

        </div>
        </div>
        <form for="" className='login_forms'>
            <div>
                <div className='login-label-container'><label>Email</label></div>
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
            <div className='login-label-container'><label>Password</label></div>
                <input 
                className='login-inputs' 
                type = "password" 
                name= "password" 
                placeholder = "password"
                value={password}
                onChange={handlePasswordChange}
                />
            </div>
            <div className='loginbtn'>
            <button className='login-btn' onClick={handleSubmit}>login</button>
            </div>
            
        </form>
        <a href='../../userRegistry/Login/login.js'>Don't have an account?</a>
        </section>
        </>
    ) */}

export default Login;