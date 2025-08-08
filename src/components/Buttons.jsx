import { useState } from 'react'
import styles from './Buttons.module.css';

export default function Buttons({onHandlerClick}) {
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => {onHandlerClick('scissor')}}>
        <img src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png" alt="" />
      </button>
      <button className={styles.button} onClick={() => {onHandlerClick('rock')}}>
        <img src="https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png" alt="" />
      </button>
      <button className={styles.button} onClick={() => {onHandlerClick('paper')}}>
        <img src="https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png" alt="" />
      </button>
    </div>
  )
}
