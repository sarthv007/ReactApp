import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { saveUserToDb, updateUserInDB } from "../Actions/UserAction";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then((response) =>
      setState({
        name: response.data.name,
        email: response.data.email,
        gender: response.data.gender,
      })
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", state);
    //api call
    dispatch(updateUserInDB(state, id));
    navigate("/");
  };

  return (
    <div>
      <h3 style={{ margin: "10px 0 10px 0" }}>Edit User Form</h3>
      <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">User Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => setState({ ...state, name: event.target.value })}
          value={state.name}
        />
        <Form.Label htmlFor="inputPassword5">User Email</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) =>
            setState({ ...state, email: event.target.value })
          }
          value={state.email}
        />
        <Form.Label htmlFor="inputPassword5">User Gender</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) =>
            setState({ ...state, gender: event.target.value })
          }
          value={state.gender}
        >
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
        <Button type={"submit"} style={{ margin: "10px 0" }} variant="success">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
