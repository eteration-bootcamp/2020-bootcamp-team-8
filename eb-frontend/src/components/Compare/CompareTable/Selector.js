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
        
        this.props.selectorCallBack(e,id);
        
    }
    render(){
        
        
        const data = this.props.data;
        
        return(
            <th>
            <Form.Group style={{ margin: "auto"}} controlId={this.props.controlId} >
                <Form.Control as="select" onChange={ event => this.handleChange(event.target.value,event.target.id)} >
                    <option  value = "">{this.props.title}</option>
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