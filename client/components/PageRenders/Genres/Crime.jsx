import React from 'react';
import styled from 'styled-components';

const Crime = ({home, shows}) => (
  <div>
    <h3>Crime</h3>
    {shows.map((show) => <a key={show.id}>{show.name}</a>)}<br></br>
    <button onClick={home}>Back to home</button>
  </div>
);

export default Crime;