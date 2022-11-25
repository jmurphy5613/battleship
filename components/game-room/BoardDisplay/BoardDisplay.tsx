import styles from './BoardDisplay.module.css'

type BoardDisplayProps = {
    board: Array<string>,
    handleMove: (index:number, board:Array<string>) => void
}

const BoardDisplay:React.FC<BoardDisplayProps> = ({ board, handleMove }) => {
    return (
        <div className={styles.grid}>
            {board.map((element:string, index:number) => {
                return (
                    <div onClick={() => {
                        console.log(index)
                        handleMove(index, board)
                    }} className={styles["grid-item"]}>
                        <h1 className={styles.label}>{element}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default BoardDisplay