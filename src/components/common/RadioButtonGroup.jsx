const RadioButtonGroup = () => {
  return (
    <div className="btn-group" role="group">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
      />
      <label className="btn btn-outline-secondary btn-sm" htmlFor="btnradio1">
        All
      </label>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
      />
      <label className="btn btn-outline-secondary btn-sm" htmlFor="btnradio2">
        Open
      </label>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio3"
        autoComplete="off"
      />
      <label className="btn btn-outline-secondary btn-sm" htmlFor="btnradio3">
        Closed
      </label>
    </div>
  );
};

export default RadioButtonGroup;
