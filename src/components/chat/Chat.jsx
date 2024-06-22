import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [open, SetOpen] = useState(false);
  const [text, setText] = useState("");
  // we get text from here add emoji to it

  // to scroll to bottom
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    // add this to input
    setText((prev) => prev + e.emoji);
    SetOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          {" "}
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>jane doe</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              deserunt quis optio harum saepe incidunt perspiciatis odio sed
              molestias voluptatem dolore mollitia.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              deserunt quis optio harum saepe incidunt perspiciatis odio sed
              molestias voluptatem dolore mollitia.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              deserunt quis optio harum saepe incidunt perspiciatis odio sed
              molestias voluptatem dolore mollitia.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              deserunt quis optio harum saepe incidunt perspiciatis odio sed
              molestias voluptatem dolore mollitia.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              deserunt quis optio harum saepe incidunt perspiciatis odio sed
              molestias voluptatem dolore mollitia.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message ">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              deserunt quis optio harum saepe incidunt perspiciatis odio sed
              molestias voluptatem dolore mollitia.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message ..."
          className="text"
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => SetOpen((prev) => !prev)}
          />
          <div className="picker">
            {" "}
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}
