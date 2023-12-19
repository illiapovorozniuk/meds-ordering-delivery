import styles from "./themSwitcher.module.scss";

interface ThemeSwitcherProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  isDarkMode,
  onToggleTheme,
}) => {
  return (
    <div className={isDarkMode ? styles.dark_theme : styles.dark_theme}>
      <button onClick={onToggleTheme}>
        {isDarkMode ? <h1>☀︎</h1> : <h1>☾</h1>}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
