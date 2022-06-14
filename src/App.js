import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [zooAnimal, setZooAnimal] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://zoo-animal-api.herokuapp.com/animals/rand/10"
        );
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setZooAnimal(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError('Could not fetch the data')
        
      }
      
    };
    fetchData();
  },[])

  return (
    <div className="App">
      <h1>Fetch API</h1>
      {error && <p>{error}</p>}
      {zooAnimal.map((animal)=>(
        <div key={animal.id}>
          <h3>{animal.name}</h3>
          <img src={animal.image_link} alt="animal"></img>
        </div>
        
      ))}
    </div>
  );
};

export default App;
