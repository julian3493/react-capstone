import React from 'react';

const pokemonTypesContainer = (types) => (
  <div className="typesContainer">
    <p className="card-info-title">Types</p>
    <ul>
      {types ? types.map((typeObject) => <li className="type" key={typeObject.type.name}>{typeObject.type.name}</li>) : <p />}
    </ul>
  </div>
);

export default pokemonTypesContainer;
