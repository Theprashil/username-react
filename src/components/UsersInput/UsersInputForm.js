/*
This components has the functionality of form for new users

usernameHandler = hold data for current username and set the next username recived
ageHandler = holds current age and the inputted age from the user
it sends userData object to `UserInputDispaly` 

*/

import styles from "./UsersInputForm.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

function UsersInputForm(props) {
  //This state is used to check if the overlay should be present or not
  const [error, setError] = useState();
  function onSubmitHandler(event) {
    event.preventDefault();
    const userData = {
      name: currentUsername,
      age: currentAge,
    };

    //Checking if the user has entered either username or age
    if (currentUsername.trim().length === 0 || currentAge.trim().length === 0) {
      setError({
        title: "An error occured",
        message: "Please enter valid username or age",
      });
      return;
    }
    //Checking if the age is less than 0
    if (+currentAge < 1) {
      setError({
        title: "An error occured",
        message: "Enter age above 0",
      });
      return;
    }
    //If the checks were success then the data is passed
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
  function closeErrorModalHandler() {
    setError(null);
  }
  const [currentAge, setCurrentAge] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeErrorModalHandler}
        />
      )}
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
    </>
  );
}

export default UsersInputForm;
