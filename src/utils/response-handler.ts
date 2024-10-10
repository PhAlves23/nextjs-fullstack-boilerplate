import { ResponseHandlerType } from "@/schemas";

export default function responseHandler<T>({
  status = 200,
  message = "",
  data = null,
  errors = null,
}: ResponseHandlerType<T>) {
  return {
    status,
    message,
    errors,
    data,
  };
}
