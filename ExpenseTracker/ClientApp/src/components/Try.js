import React, { useState } from 'react';


const Tryying = () => {

   const [state, ] =  useState(localStorage.getItem('token') || "no token")

    return (
        <>
            {state}
        </>
    )
}

export default Tryying;
