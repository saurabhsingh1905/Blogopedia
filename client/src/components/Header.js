import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"


function Header() {
    return (
        <>
            <header>
                <nav>  <h1>CLOUDY</h1>
                    <div className='avatar'>
                        <Avatar style={{ background: "blue" }}>C </Avatar>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header