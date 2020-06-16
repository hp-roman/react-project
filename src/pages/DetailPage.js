import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { items, properties } from "../assets/items";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default class MaterialTableDemo extends React.Component {
  constructor(props) {
    super(props);
    const pathname = this.props.location.pathname;
    const parttern = {
      len: pathname.length,
      pos: pathname.lastIndexOf("/"),
    };
    this.state = {
      idSelected: pathname.substr(
        parttern.pos + 1,
        parttern.len - parttern.pos
      ),
      titles: items,
      columns: properties,
      data: [],
    };
  }
  componentWillMount() {
    const link = [
      "http://hml-project.herokuapp.com/api/admin/food",
      "http://hml-project.herokuapp.com/api/admin/nutrition",
      "http://hml-project.herokuapp.com/api/admin/dish",
      "http://hml-project.herokuapp.com/api/admin/menu",
      "http://hml-project.herokuapp.com/api/admin/user",
    ];
    Axios.get(link[this.state.idSelected]).then((value) => {
      this.setState({ data: value.data.data });
    });
  }

  render() {
    // const link = [
    //   'http://hml-project.herokuapp.com/api/admin/food',
    //   'http://hml-project.herokuapp.com/api/admin/nutrition',
    //   'http://hml-project.herokuapp.com/api/admin/dish',
    //   'http://hml-project.herokuapp.com/api/admin/menu',
    //   'http://hml-project.herokuapp.com/api/admin/user'
    // ]
    const link = [
      "http://localhost:5000/api/admin/food",
      "http://localhost:5000/api/admin/nutrition",
      "http://localhost:5000/api/admin/dish",
      "http://localhost:5000/api/admin/menu",
      "http://localhost:5000/api/admin/user",
    ];
    const load = this.state.data.length;
    if (!load) {
      return (
        <div style={{ textAlign: "center", zIndex: 1000 }}>
          <CircularProgress></CircularProgress>
        </div>
      );
    } else
      return (
        <MaterialTable
          icons={tableIcons}
          title={this.state.titles[this.state.idSelected]}
          columns={this.state.columns[this.state.idSelected]}
          data={this.state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(async () => {
                  const json = JSON.stringify(oldData);
                  const dataFromAPI = await Axios.delete(
                      `${link[this.state.idSelected]}?json=${json}`
                    );
                  if(dataFromAPI['data']['success']){
                    let data = dataFromAPI['data']['data'];
                    if(data.length === undefined) data = [data];
                    this.setState({data: data});
                  }
                  resolve();
                }, 600);
              }),
          }}
        />
      );
  }
}
