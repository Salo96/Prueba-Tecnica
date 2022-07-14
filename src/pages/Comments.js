import React, {useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const Comments = () => {

    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const [data, setData] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {
      if(id){
        getIdComments(id)
      }
    }, [id]);
  
    const getIdComments = async (id) => {
      const resp = await axios.get(`${baseUrl}posts/${id}/comments`);
      if(resp.status === 200){
        setData([ ...resp.data ])
        // console.log(resp.data);
      }
    }

    return (
        <div className='container'>
          <div className='row'>
            <h1 className='col-12'>Comments</h1>
    
            { data && data.map(( item, i ) => {
              return(
                <div key={ i } className="col-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5>Name: { item.name }</h5>
                      <p>Email: { item.email }</p>
                      <p>Message: { item.body }</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    )

}

export default Comments