import React from "react";
import { useState, useEffect } from "react";
import { useGetUserQuery } from "./features/api/apiSlice";
import { useDeleteUserMutation } from "./features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function UserEditForm({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      UserEditForm
      <Button>Delete</Button>
    </div>
  );
}

export default UserEditForm;
