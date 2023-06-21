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
      <h2>Fetching posts from api using fetch api</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {tableHtml}
      </table>
    </div>
  );
}

export default TableComponent;
