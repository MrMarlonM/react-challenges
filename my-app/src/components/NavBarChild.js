import React from 'react'

function NavBarChild(props) {
  return (
        props.isLoggedIn ?
            <button onClick={props.handleButtonClick}>Logout</button>
            :
            <form>
                <label for="username">Username:</label>
                <input id="username" type="text"></input>
                <label for="password">Password:</label>
                <input id="password" type="password"></input>
                <input type="submit" value="Log in" onClick={props.handleButtonClick}></input>
            </form>
  )
}

export default NavBarChild