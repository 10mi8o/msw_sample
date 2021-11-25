import { MockUser } from "./MockUser";
import { MockUsers } from "./MockUsers";

export const SandBox: React.FC = () => {
  return (
    <>
      <MockUser />
      <hr />
      <MockUsers />
    </>
  );
};
