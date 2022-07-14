import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import axios from "axios";


const Home = () => {
  const baseUrl= "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  },[]);

  const getUsers = async () =>{
    const resp = await axios.get(`${baseUrl}users`);
    if(resp.status === 200){
      setData(resp.data);
      // console.log(resp.data);
    }
  };


  return (
    <div>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">Username</th>
              <th scope="col">city</th>
              <th scope="col">zipcode</th>
              <th scope="col">phone</th>
              <th scope="col">company</th>
              <th scope="col">action</th>
            </tr>
          </thead>
        <tbody>
          {data && data.map((item, i) => {
            return(
              <tr key={i}>
                <th scope="row">{ i + 1 }</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
                
                <td>
                  <Link to={`/user/${item.id}`}>
                    <button type="button" className="btn btn-outline-dark mr-1">view</button>
                  </Link>

                  <Link to={`/album/${item.id}`}>
                    <button type="button" className="btn btn-outline-primary mr-1">album</button>
                  </Link>

                  <Link to={`/post/${item.id}`}>
                    <button type="button" className="btn btn-outline-success mr-1">post</button>
                  </Link>

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;