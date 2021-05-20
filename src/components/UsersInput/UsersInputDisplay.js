/*
This component displays the Users New Form

*/

import UsersInputForm from "./UsersInputForm";
import styles from "./UsersInputDisplay.module.css";

function UserInputDisplay() {
  return (
    <div className={styles.container}>
      <UsersInputForm />
    </div>
  );
}

export default UserInputDisplay;
