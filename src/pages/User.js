import React, {useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {

    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const [data, setData] = useState([{}]);
    const {id} = useParams();
  
    useEffect(() => {
      if(id){
        getIdUser(id)
      }
    }, [id]);
  
    const getIdUser = async (id) => {
      const resp = await axios.get(`${baseUrl}users/${id}`);
      if(resp.status === 200){
        setData([{ ...resp.data }])
        // console.log(resp.data);
      }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
        
                {data.map(( item, i ) => {
                    return(
                        
                    <div key={i} className="col-12" >
                            <h1  className='center col-12'>{ item.name }</h1>


                            
                            <div  className="col-12">
                                <ul  className="list-group">
                                    <li className="list-group-item">
                                        <strong>username:</strong> { item.username }
                                    </li>
                                    <li className="list-group-item">
                                        <strong>email:</strong> { item.email }
                                    </li>
                                    <li className="list-group-item">
                                        <strong>phone:</strong> { item.phone }
                                    </li>
                                    <li className="list-group-item">
                                        <strong>website:</strong> { item.website }
                                    </li>

                                </ul>
                            </div>
                         

                        </div>  

                            
                      
   
                    )
                })}
            </div>
        </div>
    )
}


export default User
