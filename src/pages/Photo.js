import React, {useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';


const Photo = () => {

  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    if(id){
      getIdPhoto(id)
    }
  }, [id]);

  const getIdPhoto = async (id) => {
    const resp = await axios.get(`${baseUrl}albums/${id}/photos`);
    if(resp.status === 200){
      setData([ ...resp.data ])
    }
  }



  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-12'>foto</h1>

        { data && data.map(( item, i ) => {
          return(
            <div key={ i } className="col-3">
              <div className="card" style={{width: "250px"}}>
                <img src={ item.url } className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{ item.title }</h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Photo