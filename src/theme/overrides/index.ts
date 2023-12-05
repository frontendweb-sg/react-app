import { merge } from "lodash";
import Input from "./Input";
import Button from "./Button";

export default function ComponentsOverrides(theme: any) {
  return merge(Button(theme), Input(theme));
}
