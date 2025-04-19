import { useParams, useNavigate } from "react-router-dom";
import { useGetPublicQuestionByIdQuery } from "../../../entities/Question/api/questionApi";
import styles from "./QuestionDetailsPage.module.css";
import { stripHtml } from "../../../shared/lib/stripHtml/stripHtml";
import ArrowLeftIcon from "../../../shared/assets/icons/arrowLeft.svg";
import questionDetailsImg from "../../../shared/assets/icons/questionDetailsImg.svg";
import { QuestionInfoPanel } from "../../../widgets/QuestionInfoPanel";
import { useEffect, useRef, useState } from "react";
import BackBtn from "../../../shared/assets/icons/backBtn.svg";

export const QuestionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question, isLoading, error } = useGetPublicQuestionByIdQuery(Number(id));

  const longAnswerRef = useRef<HTMLParagraphElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    if (longAnswerRef.current && longAnswerRef.current.scrollHeight > 700) {
      setShowToggle(true);
    }
  }, [question?.longAnswer]);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error || !question) return <p>Ошибка загрузки вопроса</p>;

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <img src={ArrowLeftIcon} alt="Назад" />
        </button>
        <div className={styles.actions}>
          <button className={styles.deleteBtn}>Удалить</button>
          <button className={styles.editBtn}>Редактировать</button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.card}>
            <div className={styles.headerWrapper}>
              <img src={questionDetailsImg} alt="Иконка" className={styles.image} />
              <div className={styles.headerText}>
                <h1 className={styles.title}>{question.title}</h1>
                <p className={styles.description}>{question.description}</p>
              </div>
              <span className={styles.status}>Public</span>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.blockTitle}>Краткий ответ</h2>
            <p className={styles.text}>{stripHtml(question.shortAnswer)}</p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.blockTitle}>Развёрнутый ответ</h2>
            <p
              ref={longAnswerRef}
              className={`${styles.text} ${!isExpanded && showToggle ? styles.collapsed : ""}`}
            >
              {stripHtml(question.longAnswer)}
            </p>
            {showToggle && (
              <div className={styles.toggleWrapper} onClick={handleToggle}>
                <button className={styles.expandBtn}>
                  {isExpanded ? "Свернуть" : "Развернуть"}
                </button>
                <img src={BackBtn} alt="Развернуть" className={styles.expandIcon} />
              </div>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <QuestionInfoPanel
            complexity={question.complexity}
            rating={question.rate}
            skills={question.questionSkills?.map((s) => s.title) || []}
            keywords={question.keywords || []}
            author={question.createdBy?.username || "Неизвестно"}
          />
        </div>
      </div>
    </div>
  );
};
