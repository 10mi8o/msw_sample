import { useEffect, useState } from "react";
import { getMockUser } from "../../../api/User";
import { JsonPlaceholderUser } from "../../../common/types/User";

export const MockUser: React.FC = () => {
  const [user, setUser] = useState<JsonPlaceholderUser | null>(null);
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const response = await getMockUser("235");
      setUser(response);
    };
    fetchUser();
  }, []);

  return (
    <>
      <h1>SandBox</h1>
      <p>ID: {user?.id}</p>
      <p>NAME: {user?.name}</p>
      <p>USERNAME: {user?.username}</p>
      <p>EMAIL: {user?.email}</p>
      <hr />
    </>
  );
};
