import React, {useState, useEffect} from 'react';
import {  useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Album = () => {

  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    if(id){
      getIdAlbum(id)
    }
  }, [id]);

  const getIdAlbum = async (id) => {
    const resp = await axios.get(`${baseUrl}users/${id}/albums`);
    if(resp.status === 200){
      setData([ ...resp.data ])
      // console.log(resp.data);
    }
  }


  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-12'>Album</h1>

        { data && data.map(( item, i ) => {
          return(
            <div key={ i } className="col-3" >
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{ item.title }</h5>
                  <Link to={`/photo/${item.id}`}>
                    <button type="button" className="btn btn-outline-primary mr-1">photo</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Album