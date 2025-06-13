'use client';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/apis/getdata')  // this hits /src/app/apis/route.js
      .then(res => res.json())
      .then(result => {
        console.log('API Result:', result); // Debug log
        setData(result);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Privacy Policy Page</h1>
      {data.length > 0 ? (
        data.map(item => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>{item.email}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
