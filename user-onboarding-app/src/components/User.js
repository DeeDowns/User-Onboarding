import React from 'react'

function User({ details }) {
    if(!details) {
        return <h3>Fetching Users...</h3>
    }

    return (
        <div>
            <h2>{details.first_name || details.name}</h2>
            <p>Email: {details.email}</p>
            
        </div>
    )
}

export default User