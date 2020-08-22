import React from "react";
import User from "./User"
import Pagination from "../common/Pagination/Pagination";

let Users = (props) => {
  return (
    <div className="users">
      <Pagination currentPage={props.currentPage} itemsCount={props.usersCount}
                  limit={props.limit} setCurrentPage={props.setCurrentPage}
      />
      {props.users.map((user) => (
        <User
          key={user.id}
          user={user}
        />
      ))}
      <button>show more</button>
    </div>
  );
};
export default Users;
