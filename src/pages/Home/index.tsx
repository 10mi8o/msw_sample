import React, { useEffect, useState } from "react";
import { UserCard } from "../../common/components/UserCard";
import { User } from "../../common/types/User";

export const Home: React.FC = () => {
  const [user, setUser] = useState<User>({ username: "", age: null, role: "" });

  useEffect(() => {
    const fetchUser = async () => {
      await fetch("http://localhost:3000/user")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setUser(res);
        })
        .catch((res) => {
          console.log(res.errorMessage);
        });
    };
    fetchUser();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <UserCard user={user} />
    </>
  );
};

export default Home;
