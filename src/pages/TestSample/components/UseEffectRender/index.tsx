import React, { useEffect, useState } from "react";
import { getUser } from "../../../../api/user";
import { JsonPlaceholderUser } from "../../../../common/types/User";

export const UseEffectRender = () => {
  const [user, setUser] = useState<JsonPlaceholderUser | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>UseEffectRenderTestSample</h2>
      {user ? (
        <p>
          I'm {user.username}: {user.email}
        </p>
      ) : null}
    </div>
  );
};
