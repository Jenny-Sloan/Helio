import React from 'react';
const URI = "https://www.govtrack.us/api/v2/role?current=true&role_type=senator"
fetch(URI).then(res => res.json()
  );

  export default function Home() {
   
      return (
          <div className="Home">
              <p>
                 <h1> Home </h1> 
              </p>
          </div>
      );
   
  }