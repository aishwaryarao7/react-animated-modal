
import React, { Component } from 'react';
import './index';

class Modal extends Component {
    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          this.props.onClose();
        }
      }
      
      componentDidMount() {
        if (this.props.onClose) {
          window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
      }
      
      componentWillUnmount() {
        if (this.props.onClose) {
          window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
      }
      
      onOverlayClick() {
        this.props.onClose();
      }
      
      onDialogClick(event) {
        event.stopPropagation();
      }

    render() {
        const { open } = this.props;
        return (
            <div>
                {open ?
                    <div className='modal-overlay-div'>
                    <div
                        onClick={this.onOverlayClick.bind(this)}
                        className='modal-content-div'
                    >
                        <div className='modal-dialog-div'
                        onClick={this.onDialogClick}>
                            {open && <div>{this.props.children}</div>}
                        </div>
                    </div> </div> : null
                }
            </div>
        );
    }
}

export default Modal;