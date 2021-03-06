import { Button } from "bootstrap";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
// import { getProduct, getProductById } from "../redux/actions/productAction";
import * as productAction from "../redux/actions/productAction";

class ProductPage extends Component {
  columns = [
    { id: "id", label: "Id", minWidth: 120 },
    { id: "name", label: "Name", minWidth: 170 },
  ];

  componentWillMount = () => {
    this.props.onLoadProduct();
  };

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <Button variant="primary">Update</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.respository.userLogin,
    token: state.respository.token,
    products: state.productabc.products,
    description: state.respository.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProduct: () => {
      dispatch(productAction.getProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
