import Input from "./Input";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input label="initial investment" />
        <Input label="annual investment" />
      </div>
      <div className="input-group">
        <Input label="expected return" />
        <Input label="duration" />
      </div>
    </div>
  );
}
