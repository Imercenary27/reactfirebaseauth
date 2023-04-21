
import {useState} from "react";
import React from 'react';
import {auth} from "./firebase"
import {signInWithEmailAndPassword} from "firebase/auth"






export const Login = () => {
    const [assetId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [navigate, setNavigate] = useState(false);
    const [error, setError] = useState(null);
    const[statusId,setStatus]=useState();
    const [isLoading,setLoading] = useState(false)



      
    const submit = async e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,setEmail,setPassword)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)

        })
    
 
  }

  



   
   

    return( 
    <>
    <main className="form-signin">
        <form onSubmit={submit}>


            


            <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit" style={{backgroundColor:"#0B3ED9"}}>Sign in</button>


 
        </form>
    </main>
    </>
    )

    }
