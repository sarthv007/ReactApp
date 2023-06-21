import React from "react";
import { useParams } from "react-router-dom";

function UsersDetailsPage() {
  const { userId } = useParams();

  return <div>Loading user {userId} details</div>;
}

export default UsersDetailsPage;
