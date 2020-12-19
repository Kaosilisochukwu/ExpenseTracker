import React from 'react'
import styled from 'styled-components'


const Input = ({ placeholder, handleChange }) => {
    return (
        <InputTag type="text" placeholder={placeholder} onChange={handleChange} />
    )
}

export default Input;

const InputTag = styled.input`
    background-color: white;
    width: 33%;
    line-height: 0;
    height: 35px;
    outline: none;
    border-radius: 6px;
    border: none;
    padding-left: 15px;
    margin-top: 2rem;

`