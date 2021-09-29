import React from 'react';

const types = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
  'shadow',
];

const setTypesOptions = () => types.map((type) => <option value={type} key={type}>{type}</option>);

const Filter = () => {
  const help = [];
  console.log(help);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        POKEAPI
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item select">
            <p>Select Type:&nbsp;&nbsp;</p>
            <select id="filter-type" className="select">
              <option value="">All</option>
              {setTypesOptions()}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Filter;