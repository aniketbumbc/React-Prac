import React, { useState, useEffect } from 'react';

const User = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getUserList().then((users) => {
      if (mounted) {
        setList(users);
      }
    });
    return () => (mounted = false);
  }, []);

  async function getUserList() {
    const respones = await fetch('https://jsonplaceholder.typicode.com/users');
    debugger;
    if (respones.status === 200) {
      return await respones.json();
    }
  }

  return (
    <div>
      <h2> Users Data</h2>
      <ul>
        {list.map((items) => {
          return (
            <li key={items.id}>
              {items.name} {items.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
