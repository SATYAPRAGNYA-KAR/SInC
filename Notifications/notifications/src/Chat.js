import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Chat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div class="chat__total">
        <div class="chat__info">
          <h2>New Message</h2>
          <p>Palak Gupta messaged you</p>
        </div>
        <div class="chat__detail">
          <DeleteOutlineIcon />
          <p>
            14 May
            <br />
            19:35
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
