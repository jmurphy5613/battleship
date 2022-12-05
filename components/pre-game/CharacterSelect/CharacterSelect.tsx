import { useState } from 'react'
import styles from './CharacterSelect.module.css'
import { Characters } from '../../../utils/game-data/Characters'

type CharacterSelectProps = {
    setSelectedCharacter: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CharacterSelect:React.FC<CharacterSelectProps> = ({ setSelectedCharacter }) => {

    const [currentCharacter, setCurrentCharacter] = useState(1)

    return (
        <div className={styles.container}>
            <div className={styles["character-info"]}>
                <div className={styles["image-container"]}>
                    <img className={styles.image} src={Characters[currentCharacter].imagePath} />
                </div>
                <div className={styles["more-info"]}>
                    <h1 className={styles.name}>{Characters[currentCharacter].name}</h1>
                    <h2 className={styles.description}>{Characters[currentCharacter].description}</h2>
                    <button className={styles.select}>Select</button>
                </div>
            </div>
            <div className={styles.options}>
                <h2>{currentCharacter}/{Characters.length}</h2>
            </div>
        </div>
    )
}

export default CharacterSelect