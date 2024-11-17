import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        "post muito legal"
    ])

    const [newCommentText, setNewCommentText] = useState("");

    const publishedAtFormatted = format(publishedAt, "d de LLLL às HH:mmh", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment() {
        event.preventDefault();
        const newCommentText = event.target.elements.comment.value;
        setComments([...comments, newCommentText]);
        setNewCommentText('');
        
        
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

           <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment content={comment}/>
                    )
                })}
           </div>


        </article>
    );
}
