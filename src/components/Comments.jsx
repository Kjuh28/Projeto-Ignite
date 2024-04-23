import { Avatar } from './Avatar'
import styles from './Comments.module.css'

import {Trash , ThumbsUp } from '@phosphor-icons/react'

export function Comments({comment, deleteComment}){

    function handleDeleteComment(){
        deleteComment(comment)
    }

    return(
        <div className={styles.comment}>
            <Avatar src={'https://avatars.githubusercontent.com/u/33602289?v=4'} hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kerley Sousa</strong>
                            <time title='03 de abril de 2024' dateTime='2024-04-03 12:14:30'> Cerca de 1h atrás</time>    
                        </div>
                        

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24}/>
                            
                        </button>
                    </header>
              

                    <p>{comment}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
}