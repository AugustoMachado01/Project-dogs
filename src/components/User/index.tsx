import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Container } from "./styles";
import { Feed } from "../Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";

export function User() {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatistica" element={<UserStats />} />
      </Routes>
    </Container>
  );
}
