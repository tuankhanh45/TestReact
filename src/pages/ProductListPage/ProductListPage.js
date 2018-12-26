import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import URL from './../../constants/URL';
import callApi from './../../utils/callApi';
import { Link } from 'react-router-dom';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callApi(URL.GET_PRODUCTS, 'GET', null).then(res => {
            console.log('res:', res);
            this.setState({ products: res.data });
        })
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-info mb-10">Add product</Link>
                <ProductList>
                    {this.showProducts(this.state.products)}
                </ProductList>
            </div>
        );
    }
    showProducts = (products) => {
        console.log('pr:', products)
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
