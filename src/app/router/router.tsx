import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { QuestionsPage, QuestionDetailsPage } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <QuestionsPage />,
      },
      {
        path: "questions/:id",
        element: <QuestionDetailsPage />,
      },
      {
        path: "*",
        element: <div>404 - Страница не найдена</div>,
      },
    ],
  },
]);
