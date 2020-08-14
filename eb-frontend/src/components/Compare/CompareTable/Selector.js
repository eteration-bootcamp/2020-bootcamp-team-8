import React from 'react';
import Form from 'react-bootstrap/Form';


export default class Selector extends React.Component{
    render(){
        const data = this.props.data;
        
        return(<th class="selector1">
            <Form.Group controlId="selector">
                <Form.Label>{this.props.title}</Form.Label>
                <Form.Control as="select">
                    <option>Select Passport</option>
                    {data.map((passport,key) =>{
                        return(
                        <option>{passport.countryName}</option>
                 
                        )
                    })}
                </Form.Control>
            </Form.Group>
        </th>
        )
    }
}