import React, { Component } from "react";
import { Table } from "reactstrap";
import AppNav from "./AppNav";
import InteractiveTable from "react-interactive-table";
import { VectorMap } from "@south-paw/react-vector-maps";

import world from "./World.json";

import ReactDOM from "react-dom";
//import World from "react-svg-map";
//import { SVGMap, CheckboxSVGMap, Turkey } from "react-svg-map";
//import "react-svg-map/lib/index.css";

/*
import {
  Table,
  Container,
  Input,
  Button,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
*/

class Passport extends Component {
  state = {
    isLoading: true,
    passports: [],
  };

  async componentDidMount() {
    const response = await fetch("/api/passport/findAll");
    const body = await response.json();
    this.setState({ passports: body, isLoading: false });
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { passports, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    //console.log(passports);

    let rows = passports.map((p) => (
      <tr key={p.id}>
        <td>{p.country_name}</td>
        <td>{p.country_code}</td>
        <td>{p.continent}</td>
        <td>{p.visa_free}</td>
        <td>{p.visa_required}</td>
        <td>{p.visa_on_arrival}</td>
        <td>{p.eta}</td>
      </tr>
    ));

    /**+-----------------+-------------+------+-----+---------+----------------+
| Field           | Type        | Null | Key | Default | Extra          |
+-----------------+-------------+------+-----+---------+----------------+
| id              | int         | NO   | PRI | NULL    | auto_increment |
| country_code    | char(2)     | NO   |     | NULL    |                |
| country_name    | varchar(45) | NO   | UNI | NULL    |                |
| image_name      | varchar(10) | YES  |     | NULL    |                |
| continent       | varchar(20) | YES  |     | NULL    |                |
| visa_free       | int         | YES  |     | NULL    |                |
| visa_required   | int         | YES  |     | NULL    |                |
| visa_on_arrival | int         | YES  |     | NULL    |                |
| eta             | int         | YES  |     | NULL    |                |
+-----------------+-------------+------+-----+---------+----------------+
 */

    const style = { marginLeft: "1rem auto", width: "1200px", height: "300px" };
    /*
    const styleCountryTable = {
      Right: "10px",
      width: "100px",
      height: "100px",
    };
*/
    async function onClick({ target }) {
      //console.log(target);
      let country_name = target.getAttribute("name");
      console.log(`/api/passport/findbyname/${country_name}`);
      const res = await fetch(`/api/passport/findbyname/${country_name}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const countryInfo = await res.json();

      let insert_row = (
        <tr key={countryInfo.id}>
          <td>{countryInfo.country_name}</td>
          <td>{countryInfo.continent}</td>
          <td>{countryInfo.visa_free}</td>
          <td>{countryInfo.visa_required}</td>
          <td>{countryInfo.visa_on_arrival}</td>
          <td>{countryInfo.eta}</td>
        </tr>
      );
      console.log(
        document.getElementById("table-class").getElementsByTagName("tbody")[0]
      );
      var table = document.getElementById("table-class");
      var tbody = table.getElementsByTagName("tbody");

      var tableRef = document
        .getElementById("table-class")
        .getElementsByTagName("tbody")[0];

      var myHtmlContent = `<td>${countryInfo.country_name}</td> <td>${countryInfo.continent}</td>  <td>${countryInfo.visa_free}</td> <td>${countryInfo.visa_required}</td> <td>${countryInfo.eta}</td> `;
      var tableRef = document
        .getElementById("table-class")
        .getElementsByTagName("tbody")[0];

      var newRow = tableRef.insertRow(tableRef.rows.length);
      newRow.innerHTML = myHtmlContent;
    }

    return (
      <div>
        <AppNav />

        <InteractiveTable
          tableStyles={"responsive"}
          dataList={passports}
          columns={{
            country_name: {
              alias: "CountryName",
              sortable: true,
              active: false,
              sortingKey: "country_name",
            },
            country_code: {
              alias: "CountryCode",
              sortable: true,
              active: false,
              sortingKey: "country_code",
            },
            continent: {
              alias: "Continent",
              sortable: true,
              active: false,
              sortingKey: "continent",
            },
            visa_free: {
              alias: "VisaFree",
              sortable: true,
              active: false,
              sortingKey: "visa_free",
            },
            visa_required: {
              alias: "Visa Required",
              sortable: true,
              active: false,
              sortingKey: "visa_required",
            },
            visa_on_arrival: {
              alias: "VisaFree",
              sortable: true,
              active: false,
              sortingKey: "visa_on_arrival",
            },
            eta: {
              alias: "ETA",
              sortable: true,
              active: false,
              sortingKey: "eta",
            },
          }}
          searching={{
            active: true,
            searchPlaceholder: "Search by Country Name",
            searchKeys: ["country_name"],
          }}
          paging={{
            maxRows: 10,
            prevBtn: "Prev",
            nextBtn: "Next",
            showAll: true,
            showAllText: "show all",
            joinPages: false,
          }}
        />
        {/*<VectorMap {...world} />;*/}
        {/*        <VectorMap {...world} layerProps={layerProps} />
        <hr />
        <p>Hovered: {hovered && <code>{hovered}</code>}</p>
        <p>Focused: {focused && <code>{focused}</code>}</p>
        <p>Clicked: {clicked && <code>{clicked}</code>}</p>*/}
        <div className='rowC'>
          <div style={style}>
            <VectorMap {...world} layerProps={{ onClick }} />
          </div>
          <Table className='mt-1' id='table-class'>
            <thead>
              <tr>
                <th width='5%'>CountryName</th>
                <th width='5%'>Continent</th>
                <th width='5%'>VisaFree</th>
                <th width='5%'> VisaRequired</th>
                <th width='5%'> ETA</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Passport;
