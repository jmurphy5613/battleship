import styles from './BoardDisplay.module.css'

type BoardDisplayProps = {
    board: Array<string>
}

const BoardDisplay:React.FC<BoardDisplayProps> = ({ board }) => {
    return (
        <div className={styles.grid}>
            {board.map((element:string, index:number) => {
                return (
                    <div className={styles["grid-item"]}>
                        <h1 className={styles.label}>{element}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default BoardDisplay