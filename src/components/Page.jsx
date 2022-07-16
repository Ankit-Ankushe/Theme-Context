import React, { useContext } from 'react'
import { useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Page = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    let setColor = "black"
    if (theme === "light") {
        setColor = "black"
    } else {
        setColor = "white"
    }

    let backColor = "white"
    if (theme === "light") {
        backColor = "white"
    } else {
        backColor = "black"
    }
    return (
        <div>
            <div style={{backgroundColor:setColor}}>
            <button style={{ color: (setColor), backgroundColor: "green" ,padding:"1%"}} onClick={changeTheme}>Theme</button>
            </div>
            <h1 style={{ color: (setColor) }}>Hello World!!!</h1>
            <div>
                <form action="" style={{display:"flex", flexDirection:"column" , width:"50%" , margin:"auto" , gap:"20px"}}>
                    <input style={{padding:"2%", backgroundColor:setColor , color:backColor , border:`2px solid green`}} type="text" placeholder='Enter name' />
                    <input style={{padding:"2%", backgroundColor:setColor , color:backColor , border:`2px solid green`}} type="text" placeholder='Enter email' />
                    <input style={{padding:"2%", backgroundColor:setColor , color:backColor , border:`2px solid green`}} type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Page
