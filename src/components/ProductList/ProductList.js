import React, { Component } from 'react';
class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"> List Products</h3>
        </div>
        <div className="panel-body">

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Id</th>
                <th>Price</th>
                <th>States</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default ProductList;
