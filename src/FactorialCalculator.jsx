import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);
  return (
    <div className="factorial">
      <input
        type="text"
        placeholder="Type your name here..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <h3>{name} Factorial Calculator</h3>
      <p>Number is: {number}</p>
      <p>
        Factorial of {number} is : {factorial}
      </p>
      <button onClick={() => setNumber((prev) => prev + 1)}>
        Increment Number
      </button>
      <p className="info">Typing name does not change the factorial</p>
    </div>
  );
};

export default FactorialCalculator;
