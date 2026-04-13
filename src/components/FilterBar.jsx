//controls filtering and sorting
const FilterBar = ({ setFilter, setSort }) => {
  return (
    <div className="filter-bar">
      {/*category dropdown*/}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
      
      {/*price dropdown*/}
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
};

export default FilterBar;