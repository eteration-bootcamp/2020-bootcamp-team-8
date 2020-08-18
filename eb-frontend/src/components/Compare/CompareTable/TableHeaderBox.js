import React from 'react';

export default class TableHeaderBox extends React.Component{
    render(){
        let {imageName,countryName,score} = this.props;
        if(countryName !=="N/A"){
            imageName= <img src={require('./../../../images/passport_images/'+imageName)}
            alt={"passport image of "+ countryName}
            style={{width: "50px", height: "60px", float: "left"}}
            />
        }
        return(
        <th>
            <div>{imageName}</div>
            <div >{countryName}</div>
            <div>{score}</div>
        </th>
        )
    }
}