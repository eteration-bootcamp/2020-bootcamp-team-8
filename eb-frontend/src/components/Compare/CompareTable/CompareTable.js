import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Selector from './Selector';
import TableHeaderBox from './TableHeaderBox';

export default class CompareTable extends React.Component{
    render(){
        const {data} = this.props;
        return(
            <Table striped bordered hover variant="ligth">
                <thead>
                <tr>
                    <th class="selector1"></th>
                    <Selector data = {data} title ={"Select Passport:"}/>
                    <Selector data = {data} title ={"Compare To:"}/>
                    <Selector data = {data} title ={"Compare To:"}/>
                    <Selector data = {data} title ={"Compare To:"}/>                      
                </tr>
                </thead>
                <thead>
                    <tr>
                        <th></th>
                        <TableHeaderBox/>
                        <TableHeaderBox/>
                        <TableHeaderBox/>
                        <TableHeaderBox/>
                    </tr>
                </thead>
                <tbody>
                 {data.map((passport,key) => {
                     return(
                        <tr>
                        <td>
                            <img src={require('./../../../images/png_128/'+passport.countryName.toLowerCase()+'.png')} alt="flag">
                            </img>
                            <div>{passport.countryName}</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                     )
                 })}

                    
                </tbody>
                </Table>
                

        )
    }
}