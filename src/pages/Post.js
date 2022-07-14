import React, {useState, useEffect} from 'react';
import {  useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Post = () => {

  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    if(id){
      getIdPost(id)
    }
  }, [id]);

  const getIdPost = async (id) => {
    const resp = await axios.get(`${baseUrl}users/${id}/posts`);
    if(resp.status === 200){
      setData([ ...resp.data ])
      // console.log(resp.data);
    }
  }


  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-12'>Post</h1>

        { data && data.map(( item, i ) => {
          return(
            <div key={ i } className="col-4" >
              <div className="card mb-3">
                <div className="card-body">
                  <h2 className="card-title">{ item.title }</h2>
                  <p>{item.body}</p>
                  <Link to={`/comments/${item.id}`}>
                    <button type="button" className="btn btn-outline-primary mr-1">view comments</button>
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

export default Post