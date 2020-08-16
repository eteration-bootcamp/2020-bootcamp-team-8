import React from 'react';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Selector from './Selector';
import TableHeaderBox from './TableHeaderBox';

export default class CompareTable extends React.Component{

    constructor(props){
        super(props);
        this.state ={ selectorValue: null};
        this.selectorCallBack.bind(this);
    };

    selectorCallBack = (selectorVal) => {
        this.setState({selectorValue:selectorVal});
        //this.props.onChange(this.state.selectorValue);
    }

    render(){
        const {data,relations} = this.props;
        const loadRelations = this.props.onChange;
        let score = "Mobility Score",countryName="N/A",imageName="image";
        let relation = null;
        console.log(this.state.selectorValue);
        if(this.state.selectorValue !== null){
           let selectedPassport = data.find((passport)=>{return passport.countryCode===this.state.selectorValue});
           console.log(selectedPassport);
           score=selectedPassport.visaFree+selectedPassport.eta + selectedPassport.visaOnArrival;
           countryName=selectedPassport.countryName;
           imageName=selectedPassport.imageName;
           loadRelations(this.state.selectorValue.toLowerCase());
        }
        
        
        return(
            <Table striped bordered hover variant="ligth">
                <thead>
                <tr>
                    <th class="empty"></th>
                    <Selector data = {data} selectorCallBack={this.selectorCallBack} title ={"Select Passport:"} />
                    <Selector data = {data} title ={"Compare To:"}/>
                    <Selector data = {data} title ={"Compare To:"}/>
                    <Selector data = {data} title ={"Compare To:"}/>                      
                </tr>
                </thead>
                <thead>
                    <tr>
                        <th></th>
                        <TableHeaderBox imageName={imageName} countryName={countryName} score={score}/>
                        <TableHeaderBox/>
                        <TableHeaderBox/>
                        <TableHeaderBox/>
                    </tr>
                </thead>
                <tbody>
                 {data.map((passport,key) => {
                    let visaCode = "";
                    if(relation != undefined){
                        relation = relations.find((rel) => {return rel.counrtyOfDestination === passport.countryCode});
                        console.log(relation);
                        visaCode=relation.visaCode; 
                    }
                    return(
                        <tr>
                        <td>
                            <img src={require('./../../../images/png_128/'+passport.countryName.toLowerCase()+'.png')} alt="flag">
                            </img>
                            <div>{passport.countryName}</div>
                        </td>
                        <td>{visaCode}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        
                    )})
                }

                    
                </tbody>
                </Table>
                

        )
    }
}