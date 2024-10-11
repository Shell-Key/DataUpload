import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.adalo.com/v0/apps/c05cad5f-b429-4178-901f-2de8e69be452/collections/t_35bi25u3qrcfdf9qrd3cy4jp1',
          {
            headers: {
              Authorization: 'Bearer {5y2845qm0ejae7au4oc277ew3}'
            }
          }
        );
        setData(response.data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Adalo Dashboard</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
