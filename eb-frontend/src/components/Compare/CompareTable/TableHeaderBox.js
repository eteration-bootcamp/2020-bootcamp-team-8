import React from 'react';
import styles from './style.css';

export default class TableHeaderBox extends React.Component{
    render(){
        let {imageName,countryName,score} = this.props;
        if(countryName !=="N/A"){
            imageName= <img src={require('./../../../images/passport_images/'+imageName)}
            alt={"passport image of "+ countryName}
            style={{width: "88px", height: "125px", float: "left", borderStyle: "solid", borderColor: "red", borderWidth: "thin"}}
            />

            return(
                <th className={styles.headerBox}>
                    <div>{imageName}</div>
                    <div style={{verticalAlign: "middle", textAlign: "center", display:"inline"}}>{score}</div>
                    <div style={{fontStyle: "italic",verticalAlign: "bottom", textAlign: "center"}}>Mobility Score</div>
                </th>
                )
        }
        else{
             return(
                <th className={styles.headerBox}>
                    <div style={{verticalAlign: "middle", textAlign: "center", display:"inline"}}>N/A</div>
                    <div style={{fontStyle: "italic",verticalAlign: "bottom", textAlign: "center"}}>Mobility Score</div>
                 </th>
            )
    
        }
    }
}