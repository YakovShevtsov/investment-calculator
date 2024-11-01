import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [currentValues, setCurrentValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = currentValues.duration >= 1;

  function getInputValues(field, value) {
    setCurrentValues((prevValues) => {
      let prevValuesCopy = { ...prevValues, [field]: +value };
      return prevValuesCopy;
    });
  }

  return (
    <main>
      <Header />
      <UserInput
        onGetValues={getInputValues}
        userInputs={currentValues}
      />
      {inputIsValid ? (
        <ResultTable currentData={currentValues} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </main>
  );
}

export default App;
