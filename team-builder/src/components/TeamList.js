import React from 'react'

const TeamList = (props) => {
    const { teamMembers, edit } = props
    
    return (
        teamMembers.map((member, i) => {
            return (
                <div key={i}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                    <button onClick={() => edit(member, i)} >Edit {member.name}</button>
                </div>
            )
        })
    )
}

export default TeamList