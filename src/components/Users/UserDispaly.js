/*
Docs:

This component is resposnible for Displaying the Users

passDataToUserList - gets array of objects from app.js using custom events i.e value
and it dynamically passes the data to UserList 
*/

import UserList from "./UserList";
import styles from "./UserDisplay.module.css";

function UserDisplay(props) {
  let passDataToUserList = props.value.map((users) => (
    <UserList key={users.id} name={users.name} age={users.age} />
  ));

  return <div className={styles.container}>{passDataToUserList}</div>;
}

export default UserDisplay;
