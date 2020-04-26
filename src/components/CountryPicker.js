import React, {useState, useEffect, useContext} from "react";
import { Form } from "react-bootstrap";
import {getCountries} from '../api'
import {CountryContext} from '../context/CountryContext'

function CountryPicker() {
    const [countries, setCountries] = useState([])
    const {changeCountry} = useContext(CountryContext)

    useEffect(() => {
        async function fetchData() {
            setCountries(await getCountries())
        } 

        fetchData()
    }, [])

  return (
    <div className="country-picker d-flex justify-content-center">
      <Form.Control
        as="select"
        custom
        style={{ width: "50%", margin: "15px auto" }}
        onChange={(e) =>changeCountry(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </Form.Control>
    </div>
  );
}

export default CountryPicker;
