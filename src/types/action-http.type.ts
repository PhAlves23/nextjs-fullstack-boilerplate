import { ZodObject } from "zod";

export type ActionHttpType = {
  action: any; //TODO: depois remover esse any e tipar para pegar qualquer tipo de função
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  type: string;
  schema: ZodObject<any>;
};
