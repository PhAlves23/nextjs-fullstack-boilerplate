import { createUserActionHttp } from "@/actions/create-user.action";
import { Input } from "@/components/ui/input";
import { generateFormData } from "@/utils/generate-form-data";
import React from "react";
import { z } from "zod";
export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const { action: createUserAction, schema } = await createUserActionHttp();

    const formDataTeste = generateFormData<z.infer<typeof schema>>({
      email: "plow2@gmail.com",
      image: "",
      name: ""
    });

    console.log("formDataTeste", formDataTeste);

    const response = await createUserAction(formDataTeste);
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
