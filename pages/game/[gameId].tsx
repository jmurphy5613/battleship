import styles from '../../styles/Game.module.css'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '../../convex/_generated/react'
import { useEffect, useState } from 'react'
import BoardDisplay from '../../components/game-room/BoardDisplay/BoardDisplay'
import PlayerTitles from '../../components/game-room/PlayerTitles/PlayerTitles'

const Game = () => {

    const router = useRouter()

    const [code, setCode] = useState<string>('')
    const [playerName, setPlayerName] = useState<string>('')

    const game = useQuery("gameByCode", code)
    const editGame = useMutation("editGame")

    const isPlayerOneOrTwo = () => {
        if(!game) return
        if(game[0].playerOne === playerName) {
            return 1
        } 
        return 2
    }

    const getNewTurn = () => {
        if(!game) return
        
    }

    const isCurrentUsersTurn = (player:string) => {
        if(!game) return false
        return player === game[0].currentTurn
    }

    const getCurrentUsersBoard = () => {
        if(!game) return
        if(playerName === game[0].playerOne) return game[0].playerOneBoard
        else if(playerName === game[0].playerTwo) return game[0].playerTwoBoard
        return
    }

    const handleMove = (index:number, board:Array<string>) => {
        if(!game) return
        //check if the board that is being acted on is the users board
        if(isCurrentUsersTurn(playerName) && getCurrentUsersBoard() === board) {
            const currentBoard = board
            currentBoard[index] = 'x'
            if(isPlayerOneOrTwo() === 1) {
                editGame(game[0].playerOne, game[0].playerTwo, game[0].currentTurn, currentBoard, game[0].playerTwoBoard, game[0].isOver, code, game[0]._id)
            }
            else {
                editGame(game[0].playerOne, game[0].playerTwo, game[0].currentTurn, game[0].playerOneBoard, currentBoard, game[0].isOver, code, game[0]._id)
            }
        }
    }
    
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
                    <PlayerTitles playerName={game[0].playerOne} userName={playerName} isTurn={isCurrentUsersTurn(game[0].playerOne)}  />
                    <BoardDisplay handleMove={handleMove} board={game[0].playerOneBoard}  />
                </div>
                <div className={styles.right}>
                    <PlayerTitles playerName={game[0].playerTwo} userName={playerName} isTurn={isCurrentUsersTurn(game[0].playerTwo)} />
                    <BoardDisplay handleMove={handleMove} board={game[0].playerTwoBoard} />
                </div>
            </div>
        </div>
    )
}

export default Game