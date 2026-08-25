import { useSelector, useDispatch } from "react-redux";
import { Loader } from "./Loader";
import { fetchUsers } from "../redux/users/userActions";
import { useEffect } from "react";

export const Users = () => {
  const userFetch = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="mx-auto w-full max-w-5xl p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Users</h2>

      <div className="overflow-x-auto rounded-xl border border-gray-700">
        {userFetch.isLoading ? (
          <Loader />
        ) : userFetch.message.length > 0 ? (
          <div>There is a error: {userFetch.message}</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Username</th>
                <th className="px-5 py-3 font-semibold">Email</th>
                <th className="px-5 py-3 font-semibold">Phone Number</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700 bg-gray-900 text-gray-300">
              {userFetch.data.map((user) => {
                return (
                  <tr key={user.id} className="transition hover:bg-gray-800">
                    <td className="px-5 py-4">{user.name}</td>
                    <td className="px-5 py-4">{user.username}</td>
                    <td className="px-5 py-4">{user.email}</td>
                    <td className="px-5 py-4">{user.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
