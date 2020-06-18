import React from "react";
import ContactCard from "./ContactCard";
import { contacts } from "./ContactDetails";

import "./styles.css";

const App = () => {
  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar="https://via.placeholder.com/150"
          name={contact.name}
          email={contact.email}
          age={contact.age}
          key={contact.email}
        />
      ))}
    </>
  );
};

export default App;
