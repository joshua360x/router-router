import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [foodData, setFoodData] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  // detail page here
  const { id } = useParams()
   // make api call here
   
  //  useEffect(() => {
  //  setTimeout(() => {
  //      async function getFoodList() {
  //        const options = {
  //          method: 'GET',
  //          headers: {
  //            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
  //            'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
  //          }
  //        };
         
  //        const foodFromAPi = await fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options);
  //        const json = await foodFromAPi.json()
  //        setData(json.feed)
  //        // console.log('json :>> ', json.feed[id]);
  //        console.log('data :>> ', data);
  //      }
       
  //      getFoodList()
  //     }, 2000);
  // }, [])


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
      // setTimeout(() => {
      //   setFoodData(json.feed[id])
      //   console.log('data', foodData)
        
      // }, 7000);
      console.log('json :>> ', json.feed[id]);
      setFoodData(json.feed[id])
    }
    // getFoodList()
    console.log('data', id)
    // getFoodList()
    setIsLoading(false)
  }, [])

  return (
    <>
    {
      isLoading ? <h2>Hey We are Loading</h2> : <div>


        <h3>{foodData.display?.displayName}</h3>
        <img src={foodData.display?.images[0]} alt={foodData.display?.displayName} />
        {/* {
          data.map((food, i) => <div key={food+i}>
          <h4>{food.display.displayName}</h4>
          </div>)
        } */}
        </div>
    }
      </>
  )
}
