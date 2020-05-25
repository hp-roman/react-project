import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
class HomePage extends Component {
    constructor(props){
        super(props);
        this.setState({

        });
    }
    render(){
        return(
            <MuiThemeProvider>
                <AppBar></AppBar>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;