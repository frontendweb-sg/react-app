import { baseURL } from "@/axios-instance";
import { json, redirect } from "react-router-dom";

// get user details
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log("u", user);
  if (!user) return redirect("/auth");
  return user;
};

// get token
export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/auth");
  return token;
};

export const checkUserIsLoggedIn = () => {
  const token = getToken();
  const expireTime = new Date(localStorage.getItem("expireTime") as string);

  if (expireTime.getTime() < 0) {
    return redirect("/auth");
  }
};

export const logoutAction = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("expireTime");

  return redirect("/auth");
};

/**
 * Login action
 * @param param0
 * @returns
 */
export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  if (!(formData.get("email") && formData.get("password"))) {
    return json({ message: "Email can not be empty" }, { status: 400 });
  }

  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(`${baseURL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 401 || response.status === 422) return response;

  const data = await response.json();

  const date = new Date(data.expireTime);

  if (!response.ok)
    throw json({ message: "Could not authenticate" }, { status: 500 });

  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", data.token);
  localStorage.setItem("expireTime", date.toISOString());

  return redirect("/admin");
};

/**
 * Register action
 * @param param0
 * @returns
 */
export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const body = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    mobile: formData.get("mobile"),
  };

  const response = await fetch(`${baseURL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (response.status === 201) return data;
  console.log("data", data);
  if (!response.ok)
    throw json(
      { message: data?.errors[0].message },
      { status: data.errors[0].status }
    );

  return redirect("/");
};
