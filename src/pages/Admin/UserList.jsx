import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation } from "../../api/userApiSlice";
import { toast } from "react-toastify";

const UserList = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");

  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteUser(id);
        refetch();
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const toggleEdit = (id, username, email) => {
    setEditUserId(id);
    setEditUserName(username);
    setEditUserEmail(email);
  };

  const updateHandler = async (id) => {
    try {
      await updateUser({
        userId: id,
        username: editUserName,
        email: editUserEmail,
      });
      console.log(id, editUserName, editUserEmail);

      setEditUserId(null);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className="userList-container">
      <h1>Users</h1>
      {isLoading ? (
        <Loader />
      ) :
        error ? (
          <Message variant="error">
            {error?.data?.message || error.error}
          </Message>
        ) :
          (
            <div className="table-container d-flex flex-column">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td >{user._id}</td>
                      <td>
                        {editUserId === user._id ? (
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={editUserName}
                              onChange={(e) => setEditUserName(e.target.value)}
                              className="w-full p-2 border rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="d-flex align-items-center justify-content-between">
                            {user.username}{" "}
                          </div>
                        )}
                      </td>

                      <td>
                        {editUserId === user._id ? (
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={editUserEmail}
                              onChange={(e) => setEditUserEmail(e.target.value)}
                              className="w-full p-2 border rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="d-flex align-items-center justify-content-between">
                            <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                          </div>
                        )}
                      </td>

                      <td>
                        {user.isAdmin ? (
                          <FaCheck style={{ color: "green" }} />
                        ) : (
                          <FaTimes style={{ color: "red" }} />
                        )}
                      </td>
                      <td className="px-4 py-2">
                        <div className="d-flex align-items-center">
                          {editUserId ?
                            <button
                              onClick={() => updateHandler(user._id)}
                              className="ms-2 bg-primary py-2 px-4 rounded"
                            >
                              <FaCheck />
                            </button>
                            :
                            <button
                              className="m-2 px-4 py-2 text-white rounded bg-primary"
                              onClick={() =>
                                toggleEdit(user._id, user.username, user.email)
                              }
                            >
                              <FaEdit className=" " />
                            </button>}
                          {!user.isAdmin && (
                            <div className="d-flex">
                              <button
                                onClick={() => deleteHandler(user._id)}
                                className="bg-danger text-white py-2 px-4 rounded"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          )}
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
    </div>
  )
}

export default UserList