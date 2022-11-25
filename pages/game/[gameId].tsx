import styles from '../../styles/Game.module.css'
import { useRouter } from 'next/router'
import { useQuery } from '../../convex/_generated/react'
import { useEffect, useState } from 'react'
import BoardDisplay from '../../components/game-room/BoardDisplay/BoardDisplay'

const Game = () => {

    const router = useRouter()

    const [code, setCode] = useState<string>('')
    const [playerName, setPlayerName] = useState<string>('')

    const game = useQuery("gameByCode", code)
    
    useEffect(() => {
        const { gameId, name } = router.query

        if(typeof(gameId) == 'string' && typeof(name) == 'string') {
            setCode(gameId)
            setPlayerName(name)
        }

    }, [router.isReady])

    if(!game) return <div></div>

    return (
        <div className={styles.container}>
            <h1>{game[0].code}</h1>
            <div className={styles.boards}>
                <div className={styles.left}>

                    <BoardDisplay board={game[0].playerOneBoard}  />
                </div>
                <div className={styles.right}>

                    <BoardDisplay board={game[0].playerTwoBoard} />
                </div>
            </div>
        </div>
    )
}

export default Game