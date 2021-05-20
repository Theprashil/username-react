/*
This component displays the Users New Form
It recives user input as an object and again posses it to APP.js
modifiedUserData adds unique id from data recived
*/

import UsersInputForm from "./UsersInputForm";
import styles from "./UsersInputDisplay.module.css";

function UserInputDisplay(props) {
  const recieveInputFormData = (object) => {
    const modifiedUserData = {
      ...object,
      id: Math.random().toString(),
    };
    props.onRecieve(modifiedUserData);
    // console.log(modifiedUserData);
  };

  return (
    <div className={styles.container}>
      <UsersInputForm data={recieveInputFormData} />
    </div>
  );
}

export default UserInputDisplay;
