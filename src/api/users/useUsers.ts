import { useState, useEffect } from 'react';
import { UserResults, User } from 'api/interfaces';

type UseUsersParams = {
  results?: number;
};

interface UseUsersReturnType {
  users: Array<User> | undefined;
}

function useUsers({ results = 10 }: UseUsersParams): UseUsersReturnType {
  const [data, setData] = useState<UserResults>();

  useEffect(() => {
    const fetchUsers = async () => {
      const response: Response = await fetch(`https://randomuser.me/api/?results=${results}`);
      const users: UserResults = await response.json();

      setData(users);
    };

    fetchUsers();
  }, []);

  return { users: data?.results };
}

export default useUsers;
