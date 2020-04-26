const apiUrl = "https://covid19.mathdro.id/api";

export const getData = async (country) => {
    let flexibleUrl = apiUrl

    if(country) {
        flexibleUrl = `${apiUrl}/countries/${country}`
    }

  try {
    const response = await fetch(flexibleUrl);
    const { confirmed, recovered, deaths, lastUpdate } = await response.json();

    const changedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return changedData;
  } catch (error) {
      console.log(error)
  }
};

export const getDailyData = async () => {
    try {
        const response = await fetch(`${apiUrl}/daily`)
        const data = await response.json()
        const changedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return changedData
    } catch(error) {
        console.log(error)
    }
}

export const getCountries = async () => {
    try {
        const response = await fetch(`${apiUrl}/countries`)
        const {countries} = await response.json()
        const changedData = countries.map(country => country.name)
        
        return changedData
    } catch(error) {
        console.log(error)
    }
}