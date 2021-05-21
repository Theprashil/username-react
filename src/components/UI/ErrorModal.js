/*
This component is responsible for error overlay when the validation is true


*/

import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
import React from "react";
function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <button type="button" onClick={props.onConfirm}>
          Okay
        </button>
      </footer>
    </div>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
