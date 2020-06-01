import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Axios from "axios";
import CircularProgress from "material-ui/CircularProgress";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      isLoading: false,
    };
    localStorage.removeItem('token');
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
            {this.state.isLoading ? (
              <CircularProgress style={styleProgress} />
            ) : (
              <h3 style={{ color: "red" }}>{this.state.message}</h3>
            )}
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
      const username = this.state.username;
      const password = this.state.password;
    this.setState({ isLoading: true });
    const url = `https://hml-project.herokuapp.com/api/admin/login?username=${username}&password=${password}`;
    Axios.post(url).then((res) => {
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/home");
      } else {
        this.setState({
          message: res.data.message,
          isLoading: false,
        });
      }
    });
  }
}
const style = {
  margin: 15,
};
const styleProgress = {
  display: "block",
  margin: "auto",
};
export default LoginScreen;
