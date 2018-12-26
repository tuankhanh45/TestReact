import React, { Component } from 'react';
import callApi from './../../utils/callApi';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            cbStatus: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        var {txtName,txtPrice,cbStatus}=this.state;
        callApi('products','POST',{
            name:txtName,
            price:txtPrice,
            status:cbStatus,
        }).then(res=>{
            console.log(res)
        })
    }
    render() {
        var {txtName, txtPrice, cbStatus} = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên Sản Phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            name='txtName'
                            value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Giá Sản Phẩm</label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>

                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="cbStatus"
                                value={cbStatus}
                                onChange={this.onChange} />
                            Còn Hàng
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
