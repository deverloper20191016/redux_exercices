import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../redux/actions/repositoryAction";

class AboutPage extends Component {
  state = {
    description: "",
  };

  onChangeValue = (b) => {
    this.setState({
      description: b.target.value,
    });
  };

  addDescription = (e) => {
    e.preventDefault();

    console.log(this.state.description);
    this.props.onAddDescription(this.state.description);
  };

  render() {
    return (
      <div>
        <h1>UserLogin: {this.props.userLogin}</h1>
        <h1>Token: {this.props.tokenLogin}</h1>

        <form>
          Thêm mô tả:
          <input
            type="text"
            id="123"
            value={this.state.description}
            onChange={this.onChangeValue}
          />
          <button type="submit" onClick={this.addDescription}>
            Thêm
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
    onAddDescription: (des) => {
      dispatch(actions.addDescription(des));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
