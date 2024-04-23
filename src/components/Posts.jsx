import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import styles from './Posts.module.css'

import { Comments } from './Comments.jsx'
import { Avatar } from './Avatar.jsx'
import { useState } from 'react'



export function Posts({author, content, publishedAt}){

    //Configuração data e hora do post
    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    //Estado do comentario
    const [comments, setComments] = useState(['Post muito bacana ein!'])
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(e){
        e.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(e){
        setNewCommentText(e.target.value)
                
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }


    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

            </header>

            <div className={styles.content}> 
                {
                    content.map(line =>{
                        if(line.type === 'text'){
                            return <p key={line.content}>{line.content}</p>
                        } else if(line.type === 'link'){
                            return <p key={line.content}><a href=''>{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment' 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button onClick={handleCreateNewComment} type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                   comments.map(comment => {
                    return <Comments key={comment} comment={comment} deleteComment={deleteComment}/>  
                   })
                }
                   
            </div>
            
        </article>
    )
}