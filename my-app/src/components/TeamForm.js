import React, {useState} from "react";
import styled from "styled-components";

const StyledLinks = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
`
const MarginStyle = styled.div`
    margin:1% 5%;
`


const TeamForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value});
        console.log(member);
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""});
    };
    return (
        <form onSubmit = {submitForm}>
            <StyledLinks>
            <MarginStyle>
            <label htmlFor="title">Name: </label>
            <input id="name" 
            type="text" 
            name="name" 
            onChange={handleChanges} 
            value={member.name}
            />
            </MarginStyle>
            <MarginStyle>
            <label for="email">Email: </label>
            <input type="email" 
            id="email" 
            name="email" 
            onChange={handleChanges} 
            value={member.email}
            />
            </MarginStyle>
            <MarginStyle>
            <label htmlFor="note">Role: </label>
            <input type="text" 
            id="role"
            name="role"
            onChange={handleChanges}
            value= {member.role}
            />
            </MarginStyle>
            <button type="submit">Add Member</button>
            </StyledLinks>
        </form>
    )
}

export default TeamForm;