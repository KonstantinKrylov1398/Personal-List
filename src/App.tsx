import React from "react";
import { Route, Routes } from "react-router-dom";
import { EditModalWindow } from "./components/EditModalWindow";
import { Form } from "./components/Form";
import { Personals } from "./components/Personal";
import { PostModalWindow } from "./components/PostModalWindow";
import "./main.global.less";
export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Form />
            <Personals />
          </div>
        }
      ></Route>
      <Route path="edit" element={<EditModalWindow />}></Route>
      <Route path="post" element={<PostModalWindow />}></Route>
    </Routes>
  );
}
