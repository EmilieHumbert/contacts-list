import React from "react";
import ContactCard from "./ContactCard";
import "./styles.css";

const App = () => {
  return (
    <div>
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Jenny Han"
        email="jenny.han@notreal.com"
        age={25}
      />
      ; ;
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Jason Long"
        email="jason.long@notreal.com"
        age={45}
      />
      ;
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Peter Pan"
        email="peter.pan@neverland.com"
        age={100}
      />
      ;
    </div>
  );
};

export default App;
