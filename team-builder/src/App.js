import React, { useState } from 'react'
import Form from './components/Form'
import TeamList from './components/TeamList'

function App() {
  const initialFormData = {
    name: '',
    email: '',
    role: ''
  }

  const [teamMembers, setTeamMembers] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  const onChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    const newTeamMember = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role.trim(),
    }
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      return;
    }

    setTeamMembers(teamMembers.concat(newTeamMember))
  }

  return (
    <>
      <h1>Team Members</h1>
      <Form change={onChange} submit={onSubmit} data={formData} />
      <TeamList teamMembers={teamMembers}/>
    </>
  );
}

export default App;
