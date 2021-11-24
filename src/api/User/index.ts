import axios from "axios";
import { JsonPlaceholderUser } from "../../common/types/User";

type GetUserResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function getUser(): Promise<JsonPlaceholderUser> {
  const response = await axios.get<GetUserResponse>(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  return {
    id: response.data.id,
    name: response.data.name,
    username: response.data.username,
    email: response.data.email,
  };
}
