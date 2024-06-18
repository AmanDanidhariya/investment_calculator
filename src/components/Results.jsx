import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
  const results=calculateInvestmentResults(input);

  console.log(results);

  return <table>Results...</table>;
};

export default Results;
