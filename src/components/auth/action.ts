import { baseURL } from "@/axios-instance";
import { json, redirect } from "react-router-dom";

export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const respose = await fetch(`${baseURL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  const data = await respose.json();
  if (respose.status === 200) return data;

  if (!respose.ok)
    throw json({ message: "Could not authenticate" }, { status: 500 });

  return redirect("/");
};
