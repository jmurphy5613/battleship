import styles from './PlayerTitles.module.css'

type PlayerTitlesProps = {
    playerName: string,
    userName: string,
    isTurn: boolean
}

const PlayerTitles:React.FC<PlayerTitlesProps> = ({ playerName, userName, isTurn }) => {

    const getTitleStyles = () => {
        if(isTurn) {
            return styles.isTurn
        }
        return styles.notTurn
    }

    const getTitleText = () => {
        if(playerName === userName) {
            return "You"
        }
        return playerName
    }

    return (
        <>
            <h1 className={getTitleStyles()}>{getTitleText()}</h1>
        </>
    )
}

export default PlayerTitles