import React, {useState, useEffect} from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {getData} from './api'
import InfoCard from './components/InfoCard'
import CountryPicker from './components/CountryPicker'
import Chart from './components/Chart'
import { CountryContext } from './context/CountryContext'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function myData() {
      const data = await getData(country)
      setData(data)
    }

    myData()
  }, [country])

  const changeCountry = async (country) => {
    setCountry(country)
  }

  return (
    <CountryContext.Provider value = {{changeCountry}}>
      <div className="App">
        <Container>
          <h1 className="text-center" style={{margin: '25px 0'}}>COVID-19 Tracker</h1>
          <InfoCard data={data}/>
          <CountryPicker />
          <Chart data={data} country={country}/>
        </Container>
      </div>
    </CountryContext.Provider>
  );
}

export default App;
