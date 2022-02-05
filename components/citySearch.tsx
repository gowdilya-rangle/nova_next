import React, { useState, useEffect } from 'react';

export default function CitySearch() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('http://localhost:3000/city/Tor')
        .then((res) => res.json())
          .then((data) => {
              console.log(data);
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No cities data</p>
  
    return (
      <div>
        <h1>Cities</h1>
      </div>
    )
    
}