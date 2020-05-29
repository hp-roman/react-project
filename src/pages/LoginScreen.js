import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import history from "../services/history";
import Axios from "axios";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <h3 style={{color:"red"}}>{this.state.message}</h3>
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={(event) => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
  handleClick(event) {
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    const url = `https://hml-project.herokuapp.com/api/admin/login`;
    Axios.post(url, payload).then((res) => {
      console.log(res.data);
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        history.push("/home");
      } else {
        this.setState({
          message: res.data.message,
        });
      }
    });
  }
}
const style = {
  margin: 15,
};
export default LoginScreen;
