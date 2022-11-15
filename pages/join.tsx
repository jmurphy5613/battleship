import { useQuery, useMutation } from '../convex/_generated/react'
import styles from '../styles/Join.module.css'
import { useState } from 'react'


const Join = () => {

    const [inGame, setInGame] = useState<boolean>(false)
    const [code, setCode] = useState<string>('')

    return (
        <div className={styles.container}>
            <input className={styles.name} placeholder="Name" />
            <input className={styles.code} placeholder="Enter a code" />
            <button className={styles.join}>Join</button>
        </div>
    )
}

export default Join