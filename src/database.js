import React, {useEffect, useState} from 'react';

const Search = ({ license }) => {
    const [data, setData] = useState(null);
    const fetchData = async (jsonData) => {
      console.log(jsonData)
      try {
        const response = await fetch('https://worker-little-voice-65ef.ykchen03.workers.dev/', {
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
      <div>
        {data ? (
        <pre>{JSON.stringify(data,null,2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    );
  };
  
  export default Search;