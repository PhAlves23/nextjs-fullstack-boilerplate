export function generateFormData<T>(data: T) {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key] as string);
  }
  return formData;
}
