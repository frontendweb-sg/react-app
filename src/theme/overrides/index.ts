import { merge } from "lodash";
import inputTheme from "./Input";
import buttonTheme from "./Button";
import { ITheme } from "..";

export default function ComponentsOverrides(theme: ITheme) {
  return merge(buttonTheme(theme), inputTheme(theme));
}
