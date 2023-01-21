import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [list, setList] = useState(null);
//   console.log(list)
const {id}=useParams();

const user=list&&list.find(el=>el.id==id)
console.log(user)

  const getData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setList(res.data)
    } catch (error) {
        console.log(error)
    }
  };
  useEffect(() => {
  getData()
  }, [id])
  

  return <div>
      {
          user&&<div>

              <h1>{user.name}</h1>
              <h2>{user.id}</h2>
          </div>
      }
  </div>;
};

export default Details;
