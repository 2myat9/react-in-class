import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 512,
    name: "Neil Rhodes",
    email: "rhodes@hmc.edu",
    phone: "(909) 555-1212",
  },
  {
    id: 787,
    name: "Barack Obama",
    email: "ex-prez@whitehouse.gov",
    phone: "(312) 555-1212",
  },
];

function App() {
  const [selectedPersonId, setSelectedPersonId] = useState("null");
  const [numSelected, setNumSelected] = useState(0);
  const totalNumPeople = data.length;

  const handlePersonSelect = (id) => {
    if (id === selectedPersonId) {
      setNumSelected(0);
    } else {
      setNumSelected(1);
    }
    setSelectedPersonId(id);
  };

  return (
    <div className="App">
      <h1>{`People ${numSelected}/${totalNumPeople} selected`}</h1>
      {data.map((person) => (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          email={person.email}
          phone={person.phone}
          onSelectPerson={handlePersonSelect}
          selectedPersonId={selectedPersonId}
        />
      ))}
    </div>
  );
}

function Person(props) {
  // const [isSelected, setIsSelected] = useState(false);

  // const handlePersonSelect = () => {
  //   setIsSelected((prevState) => !prevState);
  // };

  return (
    <div
      className={`info ${
        props.selectedPersonId === props.id ? "selected" : "unselected"
      }`}
      onClick={() => props.onSelectPerson(props.id)}
    >
      <span>
        <strong>{props.name}</strong>
      </span>
      <span>{props.email}</span>

      <span>{props.phone}</span>
    </div>
  );
}

export default App;
