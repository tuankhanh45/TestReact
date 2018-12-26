import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect}from 'react-redux'
class ProductListPage extends Component {
    render() {
        var { products } = this.props
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <button type="button" className="btn btn-info mb-10">Add product</button>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
    showProducts = (products) => {
        console.log('pr',this.props)
        var res = null;
        if (products.length > 0) {
            res = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}>
                    </ProductItem>
                )
            })
        }
        return res;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductListPage);
