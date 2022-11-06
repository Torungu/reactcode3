import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class ProductList extends Component {
    renderShoes = () => {
        const { data, viewDetail } = this.props
        return data.map((shoe, index) => {
            return <div className='col-4 mt-4' key={index}>
                <ProductItem shoe={shoe} viewDetail={viewDetail} />
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.renderShoes()}
                </div>
            </div>

        )
    }
}
