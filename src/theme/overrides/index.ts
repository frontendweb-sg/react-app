import { merge } from "lodash";
import inputTheme from "./Input";
import buttonTheme from "./Button";

export default function ComponentsOverrides(theme: any) {
  return merge(buttonTheme(theme), inputTheme(theme));
}
