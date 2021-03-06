import React, {useState, useEffect} from 'react'
import {getDailyData} from '../api'
import {Line, Bar} from 'react-chartjs-2'

function Chart({data: {confirmed, recovered, deaths}, country}) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
       async function fetchDailyData() {
           const data = await getDailyData()
           setDailyData(data)
       }

       fetchDailyData()
    }, [dailyData])

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );


    const lineChart = (
        dailyData.length ? 
        (
            <Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true 
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(225, 0, 0, 0.5)',
                    fill: true 
                }]
            }}
            options= {{ elements: { point: { radius: 0 } } }}
            />
        ) : null
    )

    return (
        <>
            {country ? barChart : lineChart}
        </>
    )
}

export default Chart