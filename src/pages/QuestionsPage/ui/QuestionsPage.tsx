import { Header } from "../../../widgets/Header/ui/Header";
import { QuestionSection } from "../../../widgets/QuestionSection";
import { useQuestions } from "../model/useQuestions";

export const QuestionsPage = () => {
  const { filters, pagination, questions, ui } = useQuestions();

  if (ui.isLoading) return <p>Загрузка...</p>;
  if (ui.error) return <p>Ошибка загрузки</p>;

  return (
    <div>
      <Header />
      <QuestionSection filters={filters} pagination={pagination} questions={questions} />
    </div>
  );
};
