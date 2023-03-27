import React, {Component} from 'react'
const ThemeContext = React.createContext()

class ThemeContextProvider extends Component{

    state = {
        theme: "light"
    }

    toggleTheme = ()=>{
        this.setState(prevState=>(
            {theme: prevState.theme === "light" ? "dark" : "light"}
        ))
    }

    render(){
        return (
            <ThemeContext.Provider value={{theme: this.state.theme, toggleFunction: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export {ThemeContextProvider, ThemeContext}