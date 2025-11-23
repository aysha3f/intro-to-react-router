import React from 'react';
import { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
  const {name, username} = use(userPromise);
  console.log('userDetails2', name, username)
    return (
        <div>
           <p><small>user Name: {username}</small></p>
           <p>{name}</p>
        </div>
    );
};

export default UserDetails2;