import React from 'react';

export default class TableHeaderBox extends React.Component{
    render(){
        const {imageName,countryName,score} = this.props;
        
        return(
        <th>
            <div>{imageName}</div>
            <div >{countryName}</div>
            <div>{score}</div>
        </th>
        )
    }
}