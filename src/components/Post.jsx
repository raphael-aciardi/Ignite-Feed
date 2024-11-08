import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/raphael-aciardi.png"/>
                </div>
                <div className={styles.authorInfo}>
                    <strong>Raphael Aciardi</strong>
                    <span>Web Developer</span>
                </div>

                <time title='11 de Maio de 2022' datetime="2022-05-11 19:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}> 
                
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 jane.design/doctorcare</p>

            <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>  
            </div>
        </article>
    )

}