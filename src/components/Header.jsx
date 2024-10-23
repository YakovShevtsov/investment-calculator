import headerImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={headerImg}
        alt="Bag full of coins"
      />
      <h1>Investment calculator</h1>
    </header>
  );
}
