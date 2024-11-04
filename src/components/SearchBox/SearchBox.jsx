const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
