import React from 'react'
import { Container , AppBar , Typography , Grow , Grid } from '@material-ui/core'

import memorise from "./images/memories.png"

function App() {
    return (
        <Container maxwidth = 'lg' >
            <AppBar position='static'  color='inherit' >
                <Typography variant="h2" align="center" > Memorise </Typography>
                <img  src={memorise} alt ="memorise" height="60"/>
            </AppBar>
        </Container>
    )
}

export default App
