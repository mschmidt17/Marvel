import React from "react";
import type { Character } from "../../api/marvelApi";
import styles from "./CharacterCard.module.css";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className={styles.card}>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className={styles.thumbnail}
      />
      <h3>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;