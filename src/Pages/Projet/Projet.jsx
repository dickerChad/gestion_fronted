import { useEffect, useState } from "react";
import React from 'react';
import './Projet.css'
import axios from 'axios'


function Projet() {
    const [projets, setProjets] = useState();
    const getProjet = () =>{
        axios.get('http://127.0.0.1:8000/projet/')
            .then((res) =>{
                console.log("request response",res)
            })
    }
    useEffect(()=>{
        getProjet();
    })
  return (
    <div>Projet</div>
  )
}

export default Projet