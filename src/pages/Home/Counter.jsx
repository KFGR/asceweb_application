import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.start);

  useEffect(() => {
    const id = setInterval(() => {
      if (count < props.end) {
        setCount(count + 1);
      }
    }, 100);

    return () => clearInterval(id);
  }, [count, props.end]);

  return (
    <div className="counter">
      <span className="counter-count ">{count}</span>
    </div>
  );
}

export default Counter;
