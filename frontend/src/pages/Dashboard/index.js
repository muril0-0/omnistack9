import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import './style.css'

export default function Dashboard(){
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: {user_id}
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])
    return (
        <>
            <div className="logout"><Link to="/"><button id='btn-logout'>Logout</button></Link></div>
            <span>Clique no botão abaixo para cadastrar seus <strong>spots.</strong></span>
            <ul className = 'spot-list'>
                {spots.map(spot => (
                <li key = {spot._id}>
                    <header style = {{backgroundImage: `url(${spot.thumbnail_url})`}}/>
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar Spot</button>
            </Link>
        </>
    )
}