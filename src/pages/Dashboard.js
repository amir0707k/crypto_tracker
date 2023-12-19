import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios'

function DashboardPage() {

  const [coins, setCoins] = useState([])

  useEffect(()=> {
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    // ).then((response) => response.json())
    // .then(data => console.log(data));

    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    ).then(
      (response) => {
        console.log(response)
      }
    ).catch(error => console.log(error));
  }, [])

  return (
    <div>
      <Header/>
      <TabsComponent/>
    </div>
  )
}

export default DashboardPage