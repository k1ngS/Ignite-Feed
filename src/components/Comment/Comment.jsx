import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/k1ngS.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Beltrão</strong>
              <time title='20 de novembro às 15:00' dateTime='2023-11-20 15:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
                <Trash size={24} />
              </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}