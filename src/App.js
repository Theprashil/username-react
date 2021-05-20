import styles from "./App.module.css";
import UserDisplay from "./components/Users/UserDispaly";
import { useState } from "react";
import UserInputDisplay from "./components/UsersInput/UsersInputDisplay";

const Dummy_data = [
  {
    id: "1",
    name: "Max",
    age: 31,
  },

  {
    id: "2",
    name: "Ram",
    age: 21,
  },
];

function App() {
  // adding functionality to add users later
  const [user, setUser] = useState(Dummy_data);

  return (
    <div className={styles.container}>
      <UserInputDisplay />
      <UserDisplay value={user} />
    </div>
  );
}

export default App;
