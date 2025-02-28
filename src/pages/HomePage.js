import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { RaisedButton, ListItem, CircularProgress } from "material-ui";
import { List } from "material-ui/List";
import { items } from "../assets/items";
import Axios from "axios";

class HomePage extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    if (!token) this.props.history.push("/");
    this.state = {
      isLoadingUpdate: false,
    };
  }
  showList = () => {
    const listItem = [];
    items.forEach((item, index) => {
      listItem.push(
        <ListItem
          key={index}
          style={styleListItem[index % 2]}
          onClick={() => this.itemSelected(index)}
        >
          {item}
        </ListItem>
      );
    });
    return <List style={styleList}>{listItem}</List>;
  };
  updateFood = () => {
    this.setState({ isLoadingUpdate: true });
    Axios.get("https://hml-project.herokuapp.com/api/admin/updateall").then(
      () => {
        this.setState({ isLoadingUpdate: false });
      }
    );
  };
  itemSelected = (idSelected) => {
    this.props.history.push(`/details/${idSelected}`);
  };
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Home page" style={{ textAlign: "center" }} />
          <div style={styleButton}>
            <RaisedButton
              label="Refesh foods"
              primary={true}
              onClick={this.updateFood}
            />
          </div>
          {this.state.isLoadingUpdate ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            this.showList()
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

const styleButton = {
  textAlign: "right",
  marginTop: 15,
  marginRight: "15%",
};
const styleList = {
  marginLeft: 15,
  marginRight: "15%",
};
const fontItem = {
  fontSize: 50,
};
const styleListItem = [
  { backgroundColor: "#F3EFFD", fontItem },
  { backgroundColor: "#C8D6E5", fontItem },
];

export default HomePage;
