import { FC } from "react";

interface UserProfileProps {
  src: string;
  role: string;
  name: string;
}

const UserProfile: FC<UserProfileProps> = (props) => {
  return (
    <div className="mx-14">
      <img className="rounded-full " src={props.src} alt="profile" />

      <h3 className="text-2xl font-semibold text-center mt-4">{props.name}</h3>

      <p className="text-xl text-center text-gray-800">{props.role}</p>
    </div>
  );
};

export default UserProfile;
