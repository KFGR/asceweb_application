import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.start);
  const [view, setView] = useState(false);

  useEffect(() => {
    const Scroll = () => {
      if (window.scrollY > 1000){
        setView(true);
      }
    };
    window.addEventListener("scroll", Scroll);

    return () => {
      window.removeEventListener("scroll", Scroll);
    };

  }, []);

  useEffect(() => {
    if (view){
    const id = setInterval(() => {
      if (count < props.end) {
        setCount(count + 1);
      }
    }, 100);
    return () => clearInterval(id);
  }
  }, [view,count, props.end]);

  return (
    <div className="counter">
      <span className="counter-count ">{count}</span>
    </div>
  );
}

export default Counter;
