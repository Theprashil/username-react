/*
This component is resposnible to List the users 

*/

import styles from "./UserList.module.css";

function UserList(props) {
  return (
    <div className={styles.container}>
      <p>
        {props.name} ({props.age} years old)
      </p>
    </div>
  );
}

export default UserList;
