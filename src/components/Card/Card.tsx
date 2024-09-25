import styles from './Card.module.css'
import CardContent from './CardContent/CardContent'

function Card() {
    return(
        <>
          <div className={styles.card}>
            <CardContent title='header'/>
            <CardContent title='content'/>
            <CardContent title='footer'/>
          </div>
        </>
    )
}


export default Card