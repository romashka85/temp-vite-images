import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchValue} = useGlobalContext(); 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const searchValue = e.target.elements.search.value;
    if(!searchValue){
      return;
    }      
    setSearchValue(searchValue)
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="weather"
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
