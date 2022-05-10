import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Food() {

  const [data, setData] = useState([])

  // make api call here
  useEffect(() => {
    async function getFoodList() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
          'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
        }
      };
      
      const foodFromAPi = await fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options);
      const json = await foodFromAPi.json()
      setData(json.feed)
      console.log('json :>> ', json.feed);
      // console.log('data :>> ', data);
    }
    getFoodList()
  }, [])
  
  return (
    <div>
      {
        data.map((food, i) => <Link to={`/food/${i}`} key={food+i}>
        <ul>
          <li>{food.display.displayName}</li>
        </ul>
        </Link>)
      }
    </div>
  )
}
