import { useState } from "react";
import classes from "./CalculateForm.module.css";

const CalculateForm = (props) => {
  
  const initialData = {
    "current-savings" : 20000,
    "yearly-contribution" : 6000,
    "expected-return": 15,
    "duration": 2
  };
  const [userInput, setUserInput] = useState(initialData);

  const submitHandler = (event) => {
    event.preventDefault();
    props.investData(userInput);
  };
  const resetHandler = () => {
    setUserInput(initialData);
  };

  const changeHandler = (input, value) => {
    setUserInput( (prevState) => {
      return{
        ...prevState,
        [input] : value
      };
    });

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>

      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              changeHandler("duration", event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculateForm;
