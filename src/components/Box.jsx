import { useState } from 'react'
import styles from './Box.module.css'

export default function Box({ user, rpsData, result }) {
  return (
    <div className={`${styles.box} ${result === '승리' ? styles.win : result === '패배' ? styles.lose : ''}`}>
      <h1>{user}</h1>
      <img src={rpsData} alt="주먹" />
      <h2>{result}</h2>
    </div>
  )
}
