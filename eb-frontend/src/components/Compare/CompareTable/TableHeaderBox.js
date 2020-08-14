import React from 'react';
import Form from 'react-bootstrap/Form';


export default class TableHeaderBox extends React.Component{
    render(){
        const data = this.props.data;
        
        return(
        <th>
            <div>Image</div>
            <div>N/A</div>
            <div>Mobilty Score</div>
        </th>
        )
    }
}