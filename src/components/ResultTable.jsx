import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ currentData }) {
  const calculatedData = calculateInvestmentResults(currentData);

  const initialInvestment =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment value</td>
          <td>Interest (Year)</td>
          <td>Total interest</td>
          <td>Invested capital</td>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((row) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;

          const totalAmountInvested = row.valueEndOfYear - totalInterest;

          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
