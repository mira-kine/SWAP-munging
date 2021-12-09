import React from 'react';
import './UserInput.css';

export default function UserInput({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  setSelectedType,
  selectedType,
  type,
}) {
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
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option>Choose Direction</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="all">All</option>
          {type.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="button" onClick={() => setLoading(true)}>
          Search
        </button>
      </div>
    </div>
  );
}
