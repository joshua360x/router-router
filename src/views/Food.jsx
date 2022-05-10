import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Food() {

  const [data, setData] = useState([])
  // const [dataSort, setDataSort] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const value = new URLSearchParams(location.search).get('food') ?? '';
  const history = useHistory()

  function handleChange() {
    // console.log('hey i was clicked all');
    history.push('/')
    // useEffect(() => {
    //   async function getFoodList() {
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
    //         'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
    //       }
    //     };
        
    //     const foodFromAPi = await fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options);
    //     const json = await foodFromAPi.json()
    //     setData(json.feed)
    //     console.log('json :>> ', json.feed);
    //     // console.log('data :>> ', data);
    //   }
    //   // getFoodList()
    //   setIsLoading(false)
    // }, [])
  }


 function handleSingle() {
    // console.log('hey i was clicked single');
    history.push('/?food=single')
    // console.log('location :>> ', location);
    // console.log('value :>> ', value);
    // useEffect(() => {
    //   async function getFoodList() {
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
    //         'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
    //       }
    //     };
        
    //     const foodFromAPi = await fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options);
    //     const json = await foodFromAPi.json()
    //     // setData(json.feed)
    //     const results = json.filter((food) => food.type === 'single recipe')
    //     setData(results)
    //     console.log('json :>> ', json.feed);
    //     // console.log('data :>> ', data);
    //   }
    // getFoodList()
    //   setIsLoading(false)
    // }, [location.search])
        const results = data.filter((food) => food.type === 'single recipe')
        setData(results)
  }


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
      if (value === 'single') {
        const results = json.feed.filter((food) => food.type === 'single recipe')
        setData(results)
      }
      else {
        setData(json.feed)
      }
      // setDataSort(json.feed)
      // console.log('json :>> ', json.feed);
      // console.log('data :>> ', data);
    }
    // if (value === 'single') {
    //   handleSingle();
    // }
    getFoodList()
    setIsLoading(false)
  }, [])
  
  return (
    <>
      { isLoading ? <h2>Loading Foodies... </h2> : <div>
        
      {
        data.map((food, i) => <Link to={`/food/${i}`} key={food+i}>
        <ul>
          <li>{food.display.displayName}</li>
        </ul>
        </Link>)
      }
      <button onClick={handleChange}>Give Us All The Foods</button>
      <button onClick={handleSingle}>Give Us Single Recipes</button>
          </div>}
    </>
  )
}
