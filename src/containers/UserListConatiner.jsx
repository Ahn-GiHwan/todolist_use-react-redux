import UserList from "../components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  getUsersPromise,
  getUsersSagaStart,
  getUsersThunk,
} from "../redux/modules/users";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    // dispatch(getUsersThunk());
    // dispatch(getUsersPromise());
    dispatch(getUsersSagaStart());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
