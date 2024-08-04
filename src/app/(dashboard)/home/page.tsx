import { Input } from "@/components/ui/input";
import React from "react";
export default function Home() {
  return (
    <div>
      <form action="">
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Type your name here"
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Type your email here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
