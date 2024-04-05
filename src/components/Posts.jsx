import styles from './Posts.module.css'
import { Comments } from './Comments.jsx'

export function Posts(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src='https://avatars.githubusercontent.com/u/33602289?v=4'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Kerley Sousa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time title='03 de abril de 2024' dateTime='2024-04-03 12:14:30'> Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p>👉 <a href='#'>jane.design/doctorcare</a> </p>
                <p> 
                    <a href=''>#novoprojeto </a> {' '}
                    <a href=''>#nlw </a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comments />
                <Comments />
                <Comments />
            </div>
            
        </article>
    )
}