import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import logo from './logo.svg';
import Form from "./component/form"
import './App.css';

const initialTeam =[
  {id: uuid(), fname: 'Marc Tapp', email:'marc.tapp@me.com', role:'WebDev' }
];

function App() {

  const [team, setTeam] = useState(initialTeam)
  const [teamInfo, setTeamInfo] = useState({fname:"", email:"", role:""})

  const onInputChange = e => {
    const inputChange = e.target.name
    const newValue = e.target.value
    setTeamInfo({
      ...teamInfo, 
      [inputChange]:newValue,
    })
  }

  const onFSubmit = e => {
    e.preventDefault()
    const newTeamMember = {
      id: uuid(),
      fname: teamInfo.fname,
      email: teamInfo.email,
      role: teamInfo.role,
    }
    setTeam([...team, newTeamMember])
  }
  return (
    <div className="App">
     
        <Form 
        onInputChange={onInputChange}
        teamInfo={teamInfo}
        onFSubmit={onFSubmit}
         />
        <h3>List of Team Members</h3>
        {
          team.map(f => <div key={f.id}>Name: {f.fname}    Role:{f.role}    Email: {f.email}</div>)
        }

     

    </div>
  );
}

export default App;
