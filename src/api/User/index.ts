import axios from "axios";
import { JsonPlaceholderUser } from "../../common/types/User";
import { endpoint } from "../../settings/endpoint";

type GetUserResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function getMockUsers(): Promise<JsonPlaceholderUser[]> {
  const response = await axios.get<GetUserResponse[]>(`${endpoint}/users`);

  return response.data;
}

export async function getMockUser(
  userId: string
): Promise<JsonPlaceholderUser> {
  const response = await axios.get<GetUserResponse>(
    `${endpoint}/user/${userId}`
  );

  return {
    id: response.data.id,
    name: response.data.name,
    username: response.data.username,
    email: response.data.email,
  };
}

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
