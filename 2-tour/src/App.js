import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.netlify.app/api/react-tours-project";

// useEffect(() => {
//   effect;
//   return () => {
//     cleanup;
//   };
// }, [input]);

function App() {
	const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return <Tours />;
}

export default App;
