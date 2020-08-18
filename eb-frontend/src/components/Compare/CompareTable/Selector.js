import React from 'react';
import Form from 'react-bootstrap/Form';
import { LOAD_RELATIONS } from '../../../actions/actionTypes';



export default class Selector extends React.Component{
    
    constructor(props){
        super(props);
        this.handleChange.bind(this);
    }
    async handleChange(e,id){
        await this.props.loadRelations(e.toLowerCase());
<<<<<<< HEAD
        //if(this.props.relation.length !== 0){
=======
        
>>>>>>> b1db1d3f6b7bf3a96d54a73e0dd8171ddd63afa3
        this.props.selectorCallBack(e,id);
        
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