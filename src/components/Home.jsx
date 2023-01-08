import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => <>
    <h1>Welcome to the most boring game ever.</h1>
    <button><Link to={'play'}>Play</Link></button>
</>

export default Home