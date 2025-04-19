import { Outlet } from "react-router-dom";
import { Sidebar } from "../../widgets/Sidebar";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
