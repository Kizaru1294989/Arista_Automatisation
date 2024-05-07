import React, { useState } from 'react';
import { ButtonTarif } from '../../ButtonTarif/ButtonTarif';
import { Grid } from '@mui/material';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const postData = async () => {
    try {
      const intValue = 42; // Par exemple, vous pouvez utiliser n'importe quelle valeur entière ici
      const res = await fetch('http://127.0.0.1:5000/python/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ intValue }) // Convertit l'entier en JSON pour l'envoyer
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Grid className='card' style={{ maxWidth: "400px" }}>
        <Grid className='card_top'>
          {/* Mettez ici ce que vous voulez afficher en haut de la carte */}
          {/*<ButtonTarif onClick={postData} Text={"Start"}/>
          {error && <p>Error: {error}</p>}
          {response && <p>Response from Server: {response}</p>} */}
        </Grid>
        <Grid className='card_bottom'>
          <ButtonTarif onClick={postData} Text={"Start"}/>
          {error && <p>Error: {error}</p>}
          {response && <p>Response from Server: {response}</p>}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
