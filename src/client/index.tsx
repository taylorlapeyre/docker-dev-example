import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
  useEffect(() => {
    fetch('/api/ping').then(response => response.json()).then((data) => console.log(data));
  }, []);

  return (
    <h1>Hello world! Wow.</h1>
  );
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);