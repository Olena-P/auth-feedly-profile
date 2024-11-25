import Colors from "./Colors";

export const lightTheme = {
  backgroundColor: Colors.light.background,
  colors: Colors.light,
  textColor: Colors.light.text,
  text: {
    fontSize: 16,
    fontFamily: "SpaceMono",
    color: Colors.light.text,
  },
  button: {
    backgroundColor: Colors.light.tint,
    textColor: Colors.light.background,
  },
  input: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.tint,
    textColor: Colors.light.text,
  },
};

export const darkTheme = {
  backgroundColor: Colors.dark.background,
  colors: Colors.dark,
  textColor: Colors.dark.text,
  text: {
    fontSize: 16,
    fontFamily: "SpaceMono",
    color: Colors.dark.text,
  },
  button: {
    backgroundColor: Colors.dark.tint,
    textColor: Colors.dark.background,
  },
  input: {
    backgroundColor: Colors.dark.background,
    borderColor: Colors.dark.tint,
    textColor: Colors.dark.text,
  },
};
