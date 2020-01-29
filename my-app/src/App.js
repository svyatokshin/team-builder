import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from "./components/TeamMembers";
import TeamForm from "./components/TeamForm";


function App() {
  const [members, setMembers] = useState([
  {
    id:1,
    name: "Svyatoslav Okshin",
    email: "svyatokshin@gmail.com",
    role: "Frontend Engineer"
  }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <TeamForm addNewMember={addNewMember} />
      <TeamMembers members={members} />
    </div>
  );
}

export default App;
