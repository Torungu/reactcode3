import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { shoeDetail } = this.props;
        return (
            <div>
                <div>
                    <div className="modal fade" id="modalId" tabIndex="{-1}" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content w-70">
                                <div className="modal-header">
                                    <h5 className="modal-title text-primary" id="modalTitleId">{shoeDetail.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    </button></div >
                                <div className="modal-body" >
                                    <img src={shoeDetail.image} className="w-70" />
                                    <p className="text-danger" > {shoeDetail.price} $</p >
                                    <p>{shoeDetail.description}</p>
                                </div >
                                <div className="modal-footer" >
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" > Close</button >
                                </div >
                            </div >
                        </div >
                    </div >

                </div >
            </div >
        )
    }
}
