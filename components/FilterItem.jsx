const FilterItem = ({ category, selected, filterItems }) => {
  return (
    <li className='filter-item'>
      <button
        onClick={() => filterItems(category)}
        className={`${selected === category ? 'active' : null}`}
      >
        {category}
      </button>
    </li>
  )
}

export default FilterItem
