import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui/AppBar';

const titles = [
    "FOOD DETAILS",
    "NUTRITION DETAILS",
    "DISHES DETAILS",
    "MENU DETAILS",
    "USER DETAILS"
  ];
class DetailPage extends Component {
    constructor(props){
        super(props);
        const pathname = this.props.location.pathname;
        const parttern = {
            len: pathname.length,
            pos: pathname.lastIndexOf('/')
        }
        this.state = {
            idSelected : pathname.substr(parttern.pos + 1, parttern.len - parttern.pos)
        }
        
    }
    
    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <AppBar style={{textAlign: 'center'}} />
                    <h1>asdfas</h1>
                </div>
            </MuiThemeProvider>
        );
    }
};

export default DetailPage;
