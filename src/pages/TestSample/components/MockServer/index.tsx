import React, { useState } from "react";
import { getUser } from "../../../../api/user";

export const MockServer = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsermame] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUser = async () => {
    try {
      const user = await getUser();
      const { username } = user;
      setUsermame(username);
      setClicked(true);
    } catch {
      setErrorMessage("Feching Failed!");
    }
  };

  const buttonText = clicked ? "Loaded" : "Start Fetch";

  return (
    <div>
      {/* <h2>MockServerTestSample</h2> */}
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {errorMessage && <p data-testid="error">{errorMessage}</p>}
    </div>
  );
};
