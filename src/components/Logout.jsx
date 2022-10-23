import React from "react";

function Logout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const logouthandler = () => {
    dispatch(
      logout({
        payload: { isloggedin: false },
      })
    );
  };

  return <div>Logout</div>;
}

export default Logout;
