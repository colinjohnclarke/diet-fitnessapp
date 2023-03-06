import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
// import { useEffect, useState } from "react";

import Button from "@mui/material/Button";

import { useGetUserQuery } from "./features/api/apiSlice";
import { useDeleteUserMutation } from "./features/api/apiSlice";

function User() {
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();

  return <div>User</div>;
}

export default User;
