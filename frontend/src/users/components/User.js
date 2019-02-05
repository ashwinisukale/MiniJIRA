import React from 'react';
import {Link} from 'react-router-dom';
import UserClient from '../../common/clients/UserClient';

const User = ({ user, onRemove }) => {
  return (
    <div>
      <Link to={`user/${user.id}`} >{user.name}</Link>
      {user.description && ` - ${user.description}`}
      <button onClick={() => UserClient.remove(user.id).then(onRemove)}>Remove</button>
    </div>
  );
};

User.defaultProps = {
  onRemove: () => {}
}

export default User;