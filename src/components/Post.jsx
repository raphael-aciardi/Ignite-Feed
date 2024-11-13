import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/raphael-aciardi.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Raphael Aciardi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio de 2022" dateTime="2022-05-11 19:00:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

           <div>
                <Comment />
                <Comment />
                <Comment />
           </div>


        </article>
    );
}
