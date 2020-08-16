import React from 'react';

export default class TableHeaderBox extends React.Component{
    render(){
        let {imageName,countryName,score} = this.props;
        if(countryName !=="N/A")
        imageName= <img src={require('./../../../images/png_128/'+countryName.toLowerCase()+'.png')} 
        width="50px" height ="40px" alt="flag"
        float="left"
        />
        return(
        <th>
            <div>{imageName}</div>
            <div >{countryName}</div>
            <div>{score}</div>
        </th>
        )
    }
}