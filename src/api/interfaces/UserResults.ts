import { User } from 'api/interfaces';

interface UserResults {
  results: Array<User>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export default UserResults;
