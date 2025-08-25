import { useState } from 'react';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';

function App() {
  const [data, setdata] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const handleAddUsers = () => {
    setUsers([...users, user]);
  };
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  return (
    <>
      <h1>Derived State in React JS</h1>
      <p>Total users:{total}</p>
      <p>Last user:{last}</p>
      <p>Unique users:{unique}</p>
      <input
        type="text"
        placeholder="add new user"
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleAddUsers}>ADD USER</button>
      {users.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>Lifting state up in React JS</h2>
      <p>
        Purpose: to send data from one child component to another child
        component,using Parent component.
      </p>
      <AddUser setdata = {setdata}/>
      <DisplayUser data ={data} />
    </>
  );
}
export default App;
