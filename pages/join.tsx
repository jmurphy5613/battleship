import { useQuery, useMutation } from '../convex/_generated/react'
import styles from '../styles/Join.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'


const Join = () => {

    const router = useRouter()

    const [code, setCode] = useState<string>('')
    const [name, setName] = useState<string>('')


    const editGame = useMutation("editGame")
    const joinedGame = useQuery("gameByCode", code)

    const handleJoin = () => {
        if(!joinedGame) return
        editGame(joinedGame[0].playerOne, name, joinedGame[0].currentTurn, joinedGame[0].playerOneBoard, joinedGame[0].playerTwoBoard, joinedGame[0].isOver, joinedGame[0].code, joinedGame[0]._id)
        router.push({
            pathname: `/game/${code}`,
            query: { name: name },
        })
    }

    return (
        <div className={styles.container}>
            <input className={styles.name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input className={styles.code} onChange={(e) => setCode(e.target.value)} placeholder="Enter a code" />
            <button className={styles.join} onClick={() => {
                handleJoin()
            }}>Join</button>
        </div>
    )
}

export default Join