import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label>Find contacts by name or number:</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={s.input}
        placeholder="Search by name or number..."
      />
    </div>
  );
};

export default SearchBox;
