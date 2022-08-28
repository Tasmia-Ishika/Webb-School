import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import primaryAxios from "../Api/primaryAxios";
import auth from "../firebase.init";

const useRole = () => {
  const [user] = useAuthState(auth);
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await primaryAxios.get(
        `/user-role?email=${user?.email}`
      );
      if (data?.role) {
        setRole(data?.role);
        setRoleLoading(false);
      }
       else {
        setRole("");
        setRoleLoading(false);
      }
      setUserName(data?.name);
    })();
  }, [user]);
  return [role, roleLoading, userName];
};

export default useRole;