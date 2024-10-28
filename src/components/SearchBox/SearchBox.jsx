import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <input
        type="text"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        placeholder="Enter name to search..."
      />
    </div>
  );
};

export default SearchBox;
