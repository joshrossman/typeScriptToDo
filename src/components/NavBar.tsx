import {Nav, Navbar} from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const MyNavigate = () => {
    return (
        <Navbar style={{display:'flex'}} className="bg-info">
            <Nav.Link as={Link} to="/">Home |</Nav.Link>
            <Nav.Link as={Link} to="/add">|  Add Task |</Nav.Link>
            <Nav.Link as={Link} to="/display">|  Display and Remove |</Nav.Link>
            <Nav.Link as={Link} to="/edit">|  Edit Tasks</Nav.Link>
        </Navbar>
    )
}

export default MyNavigate