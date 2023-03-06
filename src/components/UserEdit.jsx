import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./features/api/apiSlice";
import UserEditForm from "./UserEditForm";

function UserEdit() {
  const { id } = useParams();

  const user = useSelector((state) => selectUserById(state, id));

  const content = user ? <UserEditForm user={user} /> : <p>Loading...</p>;

  return content;
}

export default UserEdit;
