import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios'
import Search from '../components/Dashboard/Search'
import PaginationControlled from '../components/Dashboard/Pagination'

function DashboardPage() {

  const [coins, setCoins] = useState([])
   const [paginatedCoins, setPaginatedCoinsCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    let prevIndex = (value-1)*10;
    setPaginatedCoinsCoins(coins.slice(prevIndex, prevIndex+10));
  };


  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  let filteredCoins = coins.filter(
    (item) => {
      return item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase());
    }
  )

  useEffect(()=> {

    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    ).then(
      (response) => {
        console.log(response)
        setCoins(response.data)
        setPaginatedCoinsCoins(coins.slice(0, 10));
      }
    ).catch((error) => {console.log(error)
      alert("Some error occurred")
    });
  }, [])

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={paginatedCoins} />
      <PaginationControlled page={page} handleChange={handleChange} />
    </div>
  );
}

export default DashboardPage