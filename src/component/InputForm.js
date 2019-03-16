import React from "react";

const InputForm = props => {
  return (
    <form className="form-task" onSubmit={props.click}>
      <div>
        <input
          type="text"
          name="task"
          className="form-input"
          placeholder="Event"
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
};

export default InputForm;
