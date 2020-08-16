import React from 'react';
import Form from 'react-bootstrap/Form';


export default class Selector extends React.Component{
    
    constructor(props){
        super(props);
        this.state={selectorValue:null,id:null};
        this.handleChange.bind(this);
    }
    async handleChange(e,id){
        await this.setState({selectorValue:e,id:id});
        await this.props.selectorCallBack(this.state.selectorValue,this.state.id);
    }
    render(){
        
        const data = this.props.data;
        
        return(
            <th>
            <Form.Group controlId={this.props.controlId} >
                <Form.Label>{this.props.title}</Form.Label>
                <Form.Control as="select" value={this.state.selectorValue} onChange={ event => this.handleChange(event.target.value,event.target.id)} >
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