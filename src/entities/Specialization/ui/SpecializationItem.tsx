import styles from "./SpecializationItem.module.css";
import { Specialization } from "../model/types";

interface Props {
  specialization: Specialization;
}

export const SpecializationItem = ({ specialization }: Props) => {
  return <span className={styles.specialization}>{specialization.title}</span>;
};
