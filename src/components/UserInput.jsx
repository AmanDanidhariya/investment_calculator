import React, { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  console.log(userInput);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </p>
        <p>
          <label>Expected return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
