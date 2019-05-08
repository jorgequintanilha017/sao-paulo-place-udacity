import React from 'react';
import './Loading.scss';

// TODO:
// If theres a error, show message
// If there isn't a error, load normally
// Unmont transition
const Loading = props => (
  <div className="loading">
    <h1>São Paulo Places</h1>
    {props.error ? (
      <h3>Houve um erro, por favor volte mais tarde.</h3>
    ) : (
      <h3>Loading, por favor, espere...</h3>
    )}
  </div>
);

export default Loading;
