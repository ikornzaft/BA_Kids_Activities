import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, onChange }) => (
  <input placeholder={placeholder} onChange={onChange} />
)

export { SearchBox };