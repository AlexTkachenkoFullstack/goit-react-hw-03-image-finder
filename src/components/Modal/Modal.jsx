import { createPortal } from "react-dom";
import React, { Component } from "react";
import css from './Modal.module.css'
const modalRoot=document.querySelector('#modal-root')
export class Modal extends Component {

componentDidMount() {
        window.addEventListener('keydown', this.hendleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeydown)
    }
    
    hendleKeydown = (e) => {
            if (e.code === "Escape") {
                this.props.onClose()
                console.log(e.code)
        }
    }

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose()
        }
    }


    render() {
        return (createPortal
                (<div className={css.overlay} onClick={this.handleBackdropClick}>
                    <div className={css.modal}>
                        <img src={this.props.modalImg} alt="BigImage"/>
                    </div>
                </div>,
                modalRoot
                )
               )
            }
        }