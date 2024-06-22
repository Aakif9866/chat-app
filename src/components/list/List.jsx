import React from "react";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";
import ChatList from "./chatList/ChatList";

export default function List() {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
}
