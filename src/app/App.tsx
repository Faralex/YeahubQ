import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuestionsPage, QuestionDetailsPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuestionsPage />,
  },
  {
    path: "/questions/:id",
    element: <QuestionDetailsPage />,
  },
]);

export const App = () => <RouterProvider router={router} />;
