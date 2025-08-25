import { useState } from 'react';

function AddUser({ setdata }) {
  return (
    <>
      <h3>Add user comp</h3>
      <input
        type="text"
        placeholder="Enter User name"
        onChange={(event) => setdata(event.target.value)}
      />
    </>
  );
}
export default AddUser;
