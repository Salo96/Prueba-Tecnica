import React, {useState, useEffect} from 'react';
import Pagination from "../components/Pagination";
import axios from 'axios';

const Photos = () => {
    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const [data, setData] = useState([]);
    const [ currentPage, setCurrentPages ] = useState(1);
    const [ postPerPage ] = useState(28);

    useEffect(() => {
        getPhotos();
    }, []);

  
    const getPhotos = async () => {
      const resp = await axios.get(`${baseUrl}photos`);
      if(resp.status === 200){
        setData([ ...resp.data ])
        // console.log(resp.data);
      }
    }

    //pagination
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const photos = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='container'>
    <div className='row'>
      <h1 className='col-12'>foto</h1>

      { photos && photos.map(( item, i ) => {
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
       <Pagination postPerPage={ postPerPage }  totalPosts={ data.length } />
    </div>
  </div>
  )
}

export default Photos