import styles from '../styles/Home.module.css'
import { useQuery, useMutation } from '../convex/_generated/react'
import { create5digitCode } from '../utils/random-code'
import { useState } from 'react'

export default function Home() {

  const games = useQuery("allGames") || []
  const addGame = useMutation("addGame")

  const [code, setCode] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [inGame, setInGame] = useState<boolean>(false)

  const createGame = () => {
    const code = create5digitCode()
    setCode(code)
    addGame(name, '', name, '', false, code)
  }


  return (
    <div className={styles.container}>
      <input className={styles.name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <button className={styles["create-code"]} onClick={() => {
        setInGame(true)
        createGame()
      }}>Create Code</button>
      {code != '' ? <h2 className={styles.code}>{code}</h2> : <h2>Create a code!</h2>}
    </div>
  )
}
