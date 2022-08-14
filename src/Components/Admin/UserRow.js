import React, { useState } from "react";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";

const UserRow = ({ user, refetch, index }) => {
    const { name, email, role, _id, image } = user;
    const [isLoading, setIsLoading] = useState(null);

    const handleMakeAdmin = (id) => {
        setIsLoading(true);
        (async () => {
          const { data } = await primaryAxios.put(`/user-role?id=${id}`, {
            role: "admin",
          });
          if (data.success) {
            Swal.fire(`${name} Is Now Admin`, {
              icon: "success",
              className: "rounded-xl",
            });
            refetch();
          }
        })();
      };
      const handleDelete = (id) => {
        setIsLoading(true);
        (async () => {
          const { data } = await primaryAxios.delete(`/user/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire(`${name} Is Now Removed`, {
              icon: "success",
              className: "rounded-xl",
            });
            refetch();
          }
        })();
      };

  return (
    <tr>
        <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`${image ? image : "https://icon-library.com/images/user-profile-icon/user-profile-icon-12.jpg"}`}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
      <button onClick={() => handleMakeAdmin(_id)} className={`btn btn-xs btn-outline btn-primary hover:text-white ${
            isLoading && "loading"
          }`} disabled={role}>Make Admin</button>
      </td>
      <td>
        {(email === 'shahedali734@gmail.com') || (email === 'shakhawathh55@gmail.com') || (email === 'rashelmahmudraj1998@gmail.com') || (email === 'amitsharma1998k@gmail.com') ? (
          <button className='btn btn-xs btn-secondary btn-outline'>Master Admin</button>
        ) :(
          <button  onClick={() => handleDelete(_id)} className={`btn btn-xs btn-outline ${
            isLoading && "loading"
          }`}>Remove User</button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
