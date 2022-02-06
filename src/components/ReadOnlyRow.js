import React from "react";

const ReadOnlyRow = ({posts, index}) => {
    return (
        <tbody>
          <tr key={index}>
            <td>{posts.name}</td>
            <td>
              <img src={posts.image} alt={"images"} />
            </td>
            <td>{posts.email}</td>
            <td>{posts.phone}</td>
            <td>{posts.address}</td>
            <td>
              <button>VIEW</button>
              <button onClick={() => onEdit(posts.id)}>EDIT</button>
              <button onClick={() => onDelete(posts.id)}>DELETE</button>
            </td>
          </tr>
        </tbody>
      );
};

export default ReadOnlyRow;