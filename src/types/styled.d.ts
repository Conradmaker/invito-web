import {ColorTheme} from "@/libs/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ColorTheme {}
}
