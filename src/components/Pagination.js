import React from 'react';

const Pagination = ({ postPerPage, totalPosts}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    // console.log(totalPosts);

  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    <a href={totalPosts === 5000 ? `/photos/${number}` : `/index/${number}` } className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination