import React from 'react';
import './UserInput.css';

export default function UserInput({ query, setQuery, setLoading }) {
  return (
    <div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button className="button" onClick={() => setLoading(true)}>
          Search
        </button>
      </div>
    </div>
  );
}
