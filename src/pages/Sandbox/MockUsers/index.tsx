import React, { useEffect, useState } from "react";
import { getMockUsers } from "../../../api/user";
import { JsonPlaceholderUser } from "../../../common/types/User";

export const MockUsers: React.FC = () => {
  const [users, setUsers] = useState<JsonPlaceholderUser[]>([]);
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const response = await getMockUsers();
      setUsers(response);
    };
    fetchUser();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </>
  );
};
