import React, { useState } from "react";

export function Play(props) {
  const [state, setState] = useState(1);

  const plus = () => {
    setState(state + 1);
  };

  const minus = () => {
    setState(state - 1);
  };

  return (
    <div>
      <button data-testid="minus" onClick={minus}>-</button>
      <div data-testid="number">State: {state}</div>
      <button data-testid="plus" onClick={plus}>+</button>
    </div>
  );
}

