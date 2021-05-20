/*
This components has the functionality of form for new users

*/

import styles from "./UsersInputForm.module.css";
function UsersInputForm() {
  return (
    <div className={styles.container}>
      <div className={styles.username}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={styles.age}>
        <label>Age (Years)</label>
        <input type="number" />{" "}
      </div>
      <div className={styles.btn}>
        <button type="submit">Add User</button>
      </div>
    </div>
  );
}

export default UsersInputForm;
