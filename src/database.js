import React, {useEffect, useState} from 'react';
import { Card, CardContent } from '@mui/material';

const Search = ({ license }) => {
    const [data, setData] = useState(null);
    const fetchData = async (jsonData) => {
      console.log(jsonData)
      try {
        const response = await fetch('https://express-topaz.vercel.app/data', {//'https://express-topaz.vercel.app/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonData)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };
  
    useEffect(() => {
      const getData = async () => {
        console.log(license);
        const result = await fetchData({ license });
        setData(result);
      };
      getData();
    }, [license]);
  
    return (
      <div style={{ display: 'flex', marginTop: '20px' }} >
        {data ? (
        <Card>
          <CardContent>
              {JSON.stringify(data.data)}
          </CardContent>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    );
  };
  
  export default Search;