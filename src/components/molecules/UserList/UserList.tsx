import React from 'react';
import { useUsers } from 'api/users';

import { Container } from './styles';

import { UserCard } from 'components/atoms';

const UserList: React.FC = () => {
  const { users } = useUsers({ results: 30 });

  return (
    <Container>
      {users?.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </Container>
  );
};

export default UserList;
