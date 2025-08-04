type ThemeType = "light" | "dark";

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}