/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/ModalDelete.css';
import PropTypes from 'prop-types';

export default class ModalDelete extends React.PureComponent {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modalDelete">
        <div className="modalDeleteBox" id="modal">
          <div className="modalDeleteTitle">
            <h2> {this.props.title} </h2>
          </div>
          <div className="modalDeleteText">
            <h2>{this.props.children}</h2>
          </div>
          <div className="modalDeleteActions">
            <div className="modalDeleteNot">
              <button type="button" onClick={this.onClose}>
                <strong> NÃO </strong>
              </button>
            </div>
            <div className="modalDeleteYes">
              <button type="button">
                <strong> SIM </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
