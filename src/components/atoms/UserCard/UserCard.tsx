import React from 'react';
import { User } from 'api/interfaces';

import { Container, Avatar, Name, Username } from './styles';

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Container>
    <Avatar src={user.picture.large} alt={`${user.login.username} picture`} />
    <Name>{`${user.name.first} ${user.name.last}`}</Name>
    <Username>{`${user.login.username}`}</Username>
  </Container>
);

export default UserCard;
