import Input from "./Input.jsx";

export default function UserInput({ onGetValues, userInputs }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="initial investment"
          onGetValues={onGetValues}
          id="initialInvestment"
          type="number"
          value={userInputs.initialInvestment}
        />
        <Input
          label="annual investment"
          onGetValues={onGetValues}
          id="annualInvestment"
          type="number"
          value={userInputs.annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          label="expected return"
          onGetValues={onGetValues}
          id="expectedReturn"
          type="number"
          value={userInputs.expectedReturn}
        />
        <Input
          label="duration"
          onGetValues={onGetValues}
          id="duration"
          type="number"
          value={userInputs.duration}
        />
      </div>
    </div>
  );
}
