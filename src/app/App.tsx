import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuestionsPage, QuestionDetailsPage } from "../pages/";
import { Sidebar } from "../widgets/Sidebar/ui/Sidebar";
import styles from "./App.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>
    <Sidebar />
    <div className={styles.content}>{children}</div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <QuestionsPage />
      </Layout>
    ),
  },
  {
    path: "/questions/:id",
    element: (
      <Layout>
        <QuestionDetailsPage />
      </Layout>
    ),
  },
]);

export const App = () => <RouterProvider router={router} />;
