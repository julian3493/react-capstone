import React from 'react';
import PropTypes from 'prop-types';

const pokemonTypesContainer = (types) => (
  <div className="typesContainer">
    <p className="card-info-title">Types</p>
    <ul>
      {types ? types.map((typeObject) => <li className="type" key={typeObject.type.name}>{typeObject.type.name}</li>) : <p />}
    </ul>
  </div>
);

pokemonTypesContainer.propTypes = {
  types: PropTypes.arrayOf.isRequired,
};

export default pokemonTypesContainer;
