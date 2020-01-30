import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
    border: 1px solid black;
    margin:2% 25%;
    background: slategrey;
    border-radius: 10px;

`
const TeamMembers = props => {
    return (
       
        <div className="member-list">
            {props.members.map(member => (
                 <CardContainer>
                    <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <h4>{member.email}</h4>
                    <p>{member.role}</p>
                    </div>
                </CardContainer>
            ))
            }
        </div>
        
    );
};

export default TeamMembers;