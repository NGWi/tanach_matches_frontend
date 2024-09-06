import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { VersesIndex } from './VersesIndex';

const VersesIndexPage = () => {
  // const [verses, setVerses] = useState([]);
  const verses = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (verse) => {
    navigate(`/verses/${verse.id}.json`);
  };


  // useEffect(() => {
  //   axios.get('http://localhost:3000/verses.json')
  //     .then(response => {
  //       setVerses(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>Verses List</h1>
      <ul>
        {verses.map((verse) => (
          <li key={verse.chapter + verse.verse}>
            <Link to={`/${verse.chapter}/${verse.verse}`}>{verse.text}</Link>
          </li>
        ))}
      </ul> */}
      <VersesIndex verses={verses} onShow={handleShow} />
    </div>
  );
};

export default VersesIndexPage;