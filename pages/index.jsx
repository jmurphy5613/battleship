import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useQuery, useMutation } from '../convex/_generated/react'

export default function Home() {

  const games = useQuery("allGames") || []
  const addGame = useMutation("addGame")

  const createGame = () => {
    addGame("devon", "john", "john")
  }


  return (
    <div className={styles.container}>
      <button onClick={createGame}>Add</button>
      {games.map((element, index) => {
        console.log(element)
        return (
          <div>
            {element.currentTurn}
          </div>
        )
      })}
    </div>
  )
}
