import { useHistory } from "react-router";
import queryString from "query-string";

const TextInput = ({ onInputChange }) => {
  const history = useHistory();
  const parsed = queryString.parse(history.location.search);

  const updateQueryParams = (newValue) => {
    parsed.search = newValue;

    history.push({
      search: queryString.stringify(parsed),
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onInputChange(e.target.value);
      updateQueryParams(e.target.value);
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      onInputChange(e.target.value);
      updateQueryParams(e.target.value);
      return;
    }
    return;
  };

  return (
    <div className="input-group input-group-sm">
      <input
        type="text"
        className="form-control form-sm bg-dark text-input"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default TextInput;
