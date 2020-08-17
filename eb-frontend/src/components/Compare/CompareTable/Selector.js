import React from 'react';
import Form from 'react-bootstrap/Form';



export default class Selector extends React.Component{
    
    constructor(props){
        super(props);
        this.handleChange.bind(this);
    }
    handleChange = (e,id)=>{
        this.props.selectorCallBack(e,id);
        this.props.loadRelations(e.toLowerCase());
        
    }
    render(){
        
        const data = this.props.data;
        
        return(
            <th>
            <Form.Group controlId={this.props.controlId} >
                <Form.Label>{this.props.title}</Form.Label>
                <Form.Control as="select" onChange={ event => this.handleChange(event.target.value,event.target.id)} >
                    <option  value = "">Select Passport</option>
                    {data.map((passport,key) =>{
                        return(
                        <option  value = {passport.countryCode}>{passport.countryName}</option>
                        )
                    })}
                </Form.Control>
            </Form.Group>
            </th>
        )
    }
}