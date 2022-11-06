import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { name, description, price, image } = this.props.shoe;
        const { viewDetail } = this.props
        return (
            <div className="card" style={{ height: '100%', width: '100%' }}>
                <img src={image} />
                <div className="card-body">
                    <h3 className="text-primary" style={{ width: '100%' }}>{name}</h3>
                    <p>{description}</p>
                    <p className="text-danger">{price} $</p>
                </div>
                <button className="btn btn-success">Add to cart <i className="fa fa-shopping-bag" aria-hidden="true"></i></button>
                <button className="btn btn-secondary" data-bs-toggle='modal' data-bs-target='#modalId' onClick={() => viewDetail(this.props.shoe)}>View Details</button>
            </div >
        )
    }
}
