import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    const login=()=>{

    }
    return (
        <div className="signinmain">
            <h1 className="text-center  display-4 pt-3 font-weight-bold" style={{color:"var(--main-yellow)",fontWeight:"500"}}>Login</h1>
            <form className="w-50 mx-auto p-4 pt-3 bg-light" onSubmit={handleSubmit(login)}>
                    
                    <div className="uname mb-2">
                    <label htmlFor="uname" className="form-label">Username</label>
                    <input type="text" id="uname" className="form-control w-75 mx-auto" {...register("username",{required:true})}/>
                    {errors.username && errors.username.type==="required" &&
                    (<p className="text-danger text-center">Required</p>)}
                </div>
                <div className="password mb-2">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" id="pass" className="form-control w-75 mx-auto" {...register("password",{required:true})}/>
                    {errors.password?.type==="required" &&
                    (<p className="text-danger text-center">Required</p>)}
                </div>
                <button className="btn btn-info text-dark mx-auto d-block fs-5" >Login</button>        
            </form>
            <p className="lead text-center mt-2">New User?
            <Link to="/register" className="fs-4 px-3">Register</Link>
            here
            </p>
            
        </div>
    )
}

export default Login
