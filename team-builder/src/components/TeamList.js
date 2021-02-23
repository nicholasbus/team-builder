import React from 'react'

const TeamList = (props) => {
    const { teamMembers } = props
    
    return (
        teamMembers.map((member, i) => {
            return (
                <div key={i}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            )
        })
    )
}

export default TeamList