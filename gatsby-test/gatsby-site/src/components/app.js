import React, { useState, useEffect } from 'react';
import useHeroData from '../hooks/use-hero-data';

const App = () => {
  const [heroOne, setHeroOne] = useState({});
  const [heroTwo, setHeroTwo] = useState({});

  const myData = useHeroData();
  console.log(myData);

  return <></>;
};

export default App;
