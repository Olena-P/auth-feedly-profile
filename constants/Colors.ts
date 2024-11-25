/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#666";
const tintColorDark = "#ccc";

export default {
  light: {
    primary: "#ff6347",
    text: "#000",
    background: "#f5f5f5",
    tint: tintColorLight,
    tabIconDefault: tintColorLight,
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: "#ff6347",
    text: "#fff",
    background: "#29292b",
    tint: tintColorDark,
    tabIconDefault: tintColorDark,
    tabIconSelected: tintColorDark,
  },
};
