import styles from "./Sidebar.module.css";
import Logo from "../../../shared/assets/icons/logo.svg";
import Yeahub from "../../../shared/assets/icons/yeahub.svg";
import PlatformIcon from "../../../shared/assets/icons/sidebar/platform.svg";
import HomeIcon from "../../../shared/assets/icons/sidebar/home.svg";
import SpecializationsIcon from "../../../shared/assets/icons/sidebar/specialization.svg";
import VerificationIcon from "../../../shared/assets/icons/sidebar/verification.svg";
import SkillsIcon from "../../../shared/assets/icons/sidebar/skills.svg";
import QuestionsIcon from "../../../shared/assets/icons/sidebar/questions.svg";
import EventsIcon from "../../../shared/assets/icons/sidebar/events.svg";
import RoadmapIcon from "../../../shared/assets/icons/sidebar/roadmap.svg";
import UserIcon from "../../../shared/assets/icons/sidebar/user.svg";
import CollectionsIcon from "../../../shared/assets/icons/sidebar/collections.svg";
import SupportIcon from "../../../shared/assets/icons/sidebar/support.svg";
import ExitIcon from "../../../shared/assets/icons/sidebar/exit.svg";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={Logo} alt="Yeahub logo" className={styles.logo} />
          <img src={Yeahub} alt="YeaHub text" className={styles.logoText} />
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li className={`${styles.item} ${styles.platform}`}>
            <img src={PlatformIcon} alt="Платформа" className={styles.icon} />
            Платформа
          </li>
          <li className={styles.item}>
            <img src={HomeIcon} alt="Главная" className={styles.icon} />
            Главная
          </li>
          <li className={styles.item}>
            <img src={SpecializationsIcon} alt="Специализации" className={styles.icon} />
            Специализации
          </li>
          <li className={styles.item}>
            <img src={VerificationIcon} alt="Верификация" className={styles.icon} />
            Верификация
          </li>
          <li className={styles.item}>
            <img src={SkillsIcon} alt="Навыки" className={styles.icon} />
            Навыки
          </li>
          <li className={`${styles.item} ${styles.active}`}>
            <img src={QuestionsIcon} alt="Вопросы" className={styles.icon} />
            Вопросы
          </li>
          <li className={styles.item}>
            <img src={EventsIcon} alt="Мероприятия" className={styles.icon} />
            Мероприятия
          </li>
          <li className={styles.item}>
            <img src={RoadmapIcon} alt="Roadmap" className={styles.icon} />
            Roadmap
          </li>
          <li className={styles.item}>
            <img src={UserIcon} alt="Пользователь" className={styles.icon} />
            Пользователь
          </li>
          <li className={styles.item}>
            <img src={CollectionsIcon} alt="Коллекции" className={styles.icon} />
            Коллекции
          </li>
        </ul>
      </nav>

      <div className={styles.bottom}>
        <button className={styles.support}>
          <img src={SupportIcon} alt="Поддержка" className={styles.icon} />
          Поддержка
        </button>

        <button className={styles.logout}>
          <img src={ExitIcon} alt="Выход" className={styles.icon} />
          Выход
        </button>
      </div>
    </aside>
  );
};
