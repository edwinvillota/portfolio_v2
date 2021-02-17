import React from 'react';

import { Container } from './styles';
import { UserList } from 'components/molecules';

const Users: React.FC = () => (
  <Container>
    <h1>Users View</h1>
    <UserList />
  </Container>
);

export default Users;
