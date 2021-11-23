import React from "react";
import { User } from "../../types/User";

type Props = {
  user: User;
};

export const UserCard: React.FC<Props> = (props: Props) => {
  const { user } = props;
  return (
    <>
      <p>
        氏名: {user.username}/{user.age}歳
      </p>
      <p>役割: {user.role}</p>
    </>
  );
};
