import { onAuthStateChanged ,signOut} from 'firebase/auth';
import React, { useEffect ,useState} from 'react'
import { auth } from './firebase';

const Authcheck = () => {

    const [authUser,setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if (user){
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
           })

           return()=>{
            listen();
           }
    },[])


    const userSignOut = () =>{
        signOut(auth).then(()=>{
            console.log("Signed Out Successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
   <div>{authUser ? <><p>{"Signed In as " + authUser.email}</p><button onClick={userSignOut}>Signed Out</button></>:<button onClick={userSignOut}>Signed Out</button>}</div>
  )
}

export default Authcheck
