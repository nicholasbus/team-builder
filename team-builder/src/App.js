import React, { useState } from 'react'
import Form from './components/Form'
import TeamList from './components/TeamList'

function App() {
  const initialFormData = {
    name: '',
    email: '',
    role: ''
  }

  const initialTeamMembers = [
    {
      name: 'Nick',
      email: 'nick@nick.com',
      role: 'Frontend Engineer',
      id: 1
    },
    {
      name: 'Bill',
      email: 'bill@bill.com',
      role: 'Backend Engineer',
      id: 2
    },
    {
      name: 'Ron',
      email: 'ron@ron.com',
      role: 'Designer',
      id: 3
    },
  ]

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formData, setFormData] = useState(initialFormData)
  const [memberToEdit, setMemberToEdit] = useState(null)

  const onChange = e => {
    const { name, value } = e.target
    if(memberToEdit) {
      setMemberToEdit({
        ...memberToEdit,
        [name]: value
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    
    if(memberToEdit){
      const editedTeamMember = {
        ...memberToEdit,
        name: memberToEdit.name.trim(),
        email: memberToEdit.email.trim(),
        role: memberToEdit.role.trim(),
      }
      if(!editedTeamMember.name || !editedTeamMember.email || !editedTeamMember.role) {
        return;
      }
      
      const newTeamMembers = teamMembers.map(member => member.id === memberToEdit.id ? memberToEdit : member)

      setTeamMembers(newTeamMembers)
      setFormData(initialFormData)
      setMemberToEdit(null)
    } else {
      const newTeamMember = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        role: formData.role.trim(),
        id: teamMembers.length + 1
      }
      if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
        return;
      }
  
      setTeamMembers(teamMembers.concat(newTeamMember))
      setFormData(initialFormData)
    }

    
  }

  const editMember = (member, i) => {
    setMemberToEdit({...member, id: i + 1})
  }
  
  return (
    <>
      <h1>Team Members</h1>
      <Form change={onChange} submit={onSubmit} data={memberToEdit ? memberToEdit : formData} />
      <TeamList teamMembers={teamMembers} edit={editMember}/>
    </>
  );
}

export default App;
