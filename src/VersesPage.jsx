import axios from "axios";
import { useState, useEffect } from "react";
import { VersesIndex } from "./VersesIndex";

export function VersesPage() {
  const [verses, setVerses] = useState([]);

  const handleIndex = () => {
    axios.get('http://localhost:3000/verses.json')
      .then(response => {
        setVerses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleIndex();
  }, []);
  
  return (
    <main>
      <VersesIndex verses={verses}/>
    </main>
  )
}