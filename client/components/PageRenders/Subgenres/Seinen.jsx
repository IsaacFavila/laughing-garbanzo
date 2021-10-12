import React from 'react';
import styled from 'styled-components';

const Seinen = ({home, shows}) => (
  <div>
    <h3>Seinen</h3>
    {shows.map((show) => <a key={show.id}>{show.name}</a>)}<br></br>
    <button onClick={home}>Back to home</button>
  </div>
);

export default Seinen;