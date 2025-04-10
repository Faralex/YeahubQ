import styles from "./Header.module.css";
import UserIcon from "../../../shared/assets/icons/UserIcon.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={UserIcon} alt="User" className={styles.userIcon} />
    </header>
  );
};
