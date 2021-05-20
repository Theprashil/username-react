/*
This component is responsible for error overlay when the validation is true


*/

import styles from "./ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
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
    </div>
  );
}

export default ErrorModal;
