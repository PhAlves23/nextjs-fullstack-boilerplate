import createUserAction from "@/actions/create-user.action";
import { Input } from "@/components/ui/input";
import React from "react";
export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const formDataMock = new FormData();
    formDataMock.append("image", "http://example.com/image.jpg");
    formDataMock.append("name", "Paulo Henrique");
    formDataMock.append("email", "ph2l322.alves@gmail.com");

    const response = await createUserAction(formDataMock);
    console.log("createUserAction response", response);
  }

  return (
    <div>
      <form action={handleSubmit}>
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
