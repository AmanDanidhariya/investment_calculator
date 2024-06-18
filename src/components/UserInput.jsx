const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            required
          />
        </p>
        <p>
          <label>Expected return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
