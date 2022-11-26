import styles from './CharacterSelect.module.css'

type CharacterSelectProps = {
    setSelectedCharacter: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CharacterSelect:React.FC<CharacterSelectProps> = ({ setSelectedCharacter }) => {
    return (
        <div className={styles.container}>
            <div className={styles["character-info"]}>
                <div className={styles["image-container"]}>
                    <img className={styles.image} src='/assets/pxArtJohn.png' />
                </div>
                <div className={styles.description}>

                </div>
            </div>
            <div className={styles.options}>
                
            </div>
        </div>
    )
}

export default CharacterSelect