"use client";

import { FormEvent, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

interface GPTMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export default function Home() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState<GPTMessage[]>([]);
  const [sendButtonEnabled, setSendButtonEnabled] = useState(true);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:4000",
    {
      onOpen: () => {
        // let uuid = sessionStorage.getItem("uuid");
        // if (uuid) {
        //   sendMessage(uuid);
        // } else {
        sendMessage("new_uuid");
        console.log("new_uuid");
        // }
      },
      onMessage: (e) => {
        console.log(e.data);
        let data: GPTMessage | GPTMessage[] = JSON.parse(e.data);
        if (Array.isArray(data) && data) {
          let newMessages = data as GPTMessage[];
          setMessageHistory((prev) => [...prev, ...newMessages]);
        } else if (data) {
          let newMessage = data as GPTMessage;
          if (newMessage.role === "assistant") {
            setSendButtonEnabled(true);
          }
          setMessageHistory((prev) => [...prev, newMessage]);
        }
      },
    }
  );

  const handleMessageSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message) {
      sendMessage(message);
      setMessage("");
      setSendButtonEnabled(false);
    } else {
      alert("Porfavor llena la caja de mensaje");
    }
  };

  return (
    <main className="container">
      <ul>
        {messageHistory.map((message, index) => (
          <li key={index}>
            <p>
              <b>
                {message?.role[0].toUpperCase() + message?.role.slice(1) + ": "}
              </b>
              {message?.content}
            </p>
          </li>
        ))}
      </ul>
      <form>
        <label>Pregunta sobre la empresa</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button onClick={handleMessageSubmit} disabled={!sendButtonEnabled}>
          Send Message
        </button>
      </form>

      <details>
        <summary>How does it work?</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          reiciendis. Enim expedita, alias et suscipit vitae explicabo velit
          voluptate, nesciunt quaerat corporis dolorum aliquid ducimus minus ea
          sequi laboriosam? Quas.
        </p>
      </details>
    </main>
  );
}
