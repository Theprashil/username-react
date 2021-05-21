/*
This components has the functionality of form for new users

usernameHandler = hold data for current username and set the next username recived
ageHandler = holds current age and the inputted age from the user
it sends userData object to `UserInputDispaly` 

*/

import styles from "./UsersInputForm.module.css";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

function UsersInputForm(props) {
  //used ref instead of state management
  const userNameInputRef = useRef();
  const ageInputRef = useRef();

  //This state is used to check if the overlay should be present or not
  const [error, setError] = useState();

  function onSubmitHandler(event) {
    event.preventDefault();
    //created two const where its value is stored upon submit instead of earlier onChange
    const enteredUserName = userNameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const userData = {
      name: enteredUserName,
      age: enteredAge,
    };

    //Checking if the user has entered either username or age
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "An error occured",
        message: "Please enter valid username or age",
      });
      return;
    }
    //Checking if the age is less than 0
    if (+enteredAge < 1) {
      setError({
        title: "An error occured",
        message: "Enter age above 0",
      });
      return;
    }
    //If the checks were success then the data is passed
    props.data(userData);
    //Resets the value of username and age upon submit
    userNameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function closeErrorModalHandler() {
    setError(null);
  }
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
            <input type="text" ref={userNameInputRef} />
          </div>
          <div className={styles.age}>
            <label>Age (Years)</label>
            <input type="number" ref={ageInputRef} />
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
