import { useParams } from "react-router-dom";
import { useGetPublicQuestionByIdQuery } from "../../shared/api/baseApi";
import styles from "./QuestionDetailsPage.module.css";
import { stripHtml } from "../../shared/lib/stripHtml/stripHtml";
import { BackButton } from "../../shared/ui/BackButton/BackButton";

export const QuestionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetPublicQuestionByIdQuery(Number(id));

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;
  if (!data) return <p>Вопрос не найден</p>;

  return (
    <div className={styles.container}>
      <BackButton />
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.answer}>{stripHtml(data.longAnswer)}</div>
    </div>
  );
};
