import "./Team.css";
import React, {useState} from "react";

function Template() {
  const [radiobuttons, setradiobuttons] = useState({
    radiobutton1: null,
    radiobutton2: null
  });
  // const [algo, setalgo] = useState("NADA");
  // const [algo, setalgo] = useState({});
  // const [count, setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(radiobuttons);
  }

  return (
    <div className="team">
      <form onSubmit={handleSubmit} >
      <input
          type="radio"
          name="RadioSetOne"
          id="ascememberyes"
          value="Yes"
          onChange={() =>
            setradiobuttons({
              ...radiobuttons,
              radiobutton1: "Yes"
            })
          }
        />
        <input
          type="radio"
          name="RadioSetOne"
          id="ascememberno"
          value="No"
          onChange={() =>
            setradiobuttons({
              ...radiobuttons,
              radiobutton1: "No"
            })
          }
        />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Template;
