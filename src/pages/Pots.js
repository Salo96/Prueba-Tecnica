import React, {useState, useEffect} from 'react';
import Pagination from "../components/Pagination";
import {   Link } from 'react-router-dom';
import axios from 'axios';

const Pots = () => {

    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const [data, setData] = useState([]);
    const [prueba] = useState(true);
    const [ currentPage ] = useState(1);
    const [ postPerPage ] = useState(12);
  
  
    useEffect(() => {
        getPost();
    }, []);

  
    const getPost = async () => {
      const resp = await axios.get(`${baseUrl}posts`);
      if(resp.status === 200){
        setData([ ...resp.data ])
        // console.log(resp.data);
      }
    }

    //pagination
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


    return (
        <div className='container'>
          <div className='row'>
            <h1 className='col-12'>Post</h1>
    
            { currentPosts && currentPosts.map(( item, i ) => {
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
             <Pagination postPerPage={ postPerPage }  totalPosts={ data.length } prueba={prueba} />
          </div>
        </div>
      )

}

export default Pots