/*
This components has the functionality of form for new users

usernameHandler = hold data for current username and set the next username recived
ageHandler = holds current age and the inputted age from the user
it sends userData object to `UserInputDispaly` 

*/

import styles from "./UsersInputForm.module.css";
import { useState } from "react";

function UsersInputForm(props) {
  function onSubmitHandler(event) {
    event.preventDefault();
    const userData = {
      name: currentUsername,
      age: currentAge,
    };
    props.data(userData);

    setCurrentUsername("");
    setCurrentAge("");
  }
  function usernameHandler(event) {
    setCurrentUsername(event.target.value);
  }
  function ageHandler(event) {
    setCurrentAge(event.target.value);
  }

  const [currentAge, setCurrentAge] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.container}>
        <div className={styles.username}>
          <label>Username</label>
          <input
            type="text"
            value={currentUsername}
            onChange={usernameHandler}
          />
        </div>
        <div className={styles.age}>
          <label>Age (Years)</label>
          <input type="number" value={currentAge} onChange={ageHandler} />
        </div>
        <div className={styles.btn}>
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
}

export default UsersInputForm;
