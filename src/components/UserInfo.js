import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions/repositoryAction";

class UserInfo extends Component {
  state = {
    userLogin: "",
  };

  onChangeValue = (b) => {
    this.setState({
      userLogin: b.target.value,
    });
  };

  updateUserLogin = (e) => {
    e.preventDefault();
    let userName = this.state.userLogin;

    // let user = {
    //   userName: userName,
    //   pass: "123456",
    // };

    this.props.onUpdateUser(userName);
  };

  render() {
    return (
      <div>
        <h1>User Info Page</h1>
        <form>
          Sửu thông tin người dùng:
          <input
            type="text"
            value={this.state.description}
            onChange={this.onChangeValue}
          />
          <button type="submit" onClick={this.updateUserLogin}>
            Sửa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.respository.userLogin,
    tokenLogin: state.respository.token,
    products: state.productabc.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (userName) => {
      dispatch(actions.updateUserLogin(userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
