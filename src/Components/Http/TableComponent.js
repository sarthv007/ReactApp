import React from "react";
import "./TableComponent.scss";
function TableComponent(props) {
  const { posts } = props;
  const tableHtml =
    posts.length &&
    posts.map((post) => {
      return (
        <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      );
    });
  return (
    <div>
      {posts.length ? (
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          {tableHtml}
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default TableComponent;
