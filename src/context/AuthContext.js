import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider =({children}) =>{
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const history = useNavigate();

    let loginUser = async(e ) =>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history('/dashboard');
        }
        else{
            alert("something in wrongg!")
        }
    }
let logoutUser = () =>{
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    history('/');
}

let updateTokens = async()=>{
    console.log("updated tokens")
    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({'refresh': authTokens.refresh})
        })
        let data = await response.json()
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else{
            logoutUser()
        }
}

    let contextData = {
        user: user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser : logoutUser
    }

    useEffect(()=>{

        let fourMunites = 1000 * 60 *4
        let interval = setInterval(()=>{
            if(authTokens){
                updateTokens()
            }
        }, fourMunites)
        return ()=> clearInterval(interval)
    },[authTokens, loading])



    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}