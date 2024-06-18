import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const results = calculateInvestmentResults(input);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((tableItem) => {
          const totalInterest =
            tableItem.valueEndOfYear -
            tableItem.annualInvestment * tableItem.year -
            initialInvestment;

          const totalAmountInvested = tableItem.valueEndOfYear - totalInterest;

          return (
            <tr key={tableItem.year}>
              <td>{tableItem.year}</td>
              <td>{formatter.format(tableItem.valueEndOfYear)}</td>
              <td>{formatter.format(tableItem.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
