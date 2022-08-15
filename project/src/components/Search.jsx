import { MdSearch } from "react-icons/md";

export default function Search({ handleSearch }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3rem" />
      <input
        type="text"
        placeholder="type to Search"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
