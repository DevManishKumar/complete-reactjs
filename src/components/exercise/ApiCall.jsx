
import React, { useState, useEffect } from "react";

function ApiCall() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";


  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchData()
  }, []);
  console.log(data)

  return (
    <div className="contained">
      <h1 className="text-head">Get data from api using inbuild fetch API</h1>
      <center>
        {data.map((data, index) => {
          return (
            < div key={data.id}>
              < p className="text-body">Name : {data.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default ApiCall;
