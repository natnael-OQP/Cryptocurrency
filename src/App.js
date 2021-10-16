import React from 'react'
import GlobalStyle from './GlobalStyled'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from './Pages/Homepage';


const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Homepage/>
        </Router>
    )
}

export default App
