// import React, { useState } from "react";
// import { Grid } from "@mui/material";
// import { ButtonTarif } from "../../ButtonTarif/ButtonTarif";
// import { useEffect } from "react";


// const HomeComponent = ({  }) => {
//   const[accuracy,setAccuracy] = useState(0)
//   useEffect(() => {
//     fetch("/api/ml").then(res => res.json()).then(data => {setAccuracy(data.accuracy)})

//   },[])

//   return (
//     <>

//         <Grid className="card">
//           <Grid className="card_right">
        
        
//           </Grid>

//           <Grid className="card_left">
//           <ButtonTarif Text={"Start Lab"}/>
//           OUTPUT : {accuracy}
//           </Grid>
//         </Grid>


//     </>
//   );
// };

// export default HomeComponent;

import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    console.log({'data':data})
    setResponse(data.message);
  };

  return (
    <div>
      <button onClick={fetchData}>Get Data from API</button>
      {response && <p>Response from API: {response}</p>}
    </div>
  );
}

export default App;
