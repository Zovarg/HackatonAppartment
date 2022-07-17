import React from 'react'
import classes from './MyInput.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, InputGroup} from 'react-bootstrap'
const MyInput = (props) => {
    return (
        <InputGroup className="form mb-3">
                <input  className={classes.myInput} {...props}/>
        </InputGroup>





    )
}

export default MyInput