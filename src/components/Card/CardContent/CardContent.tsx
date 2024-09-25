
import styles from './CardContent.module.css'

export interface Props {
  title: string;
}

const CardContent: React.FC<{title: string}> = ({title}) => {
    return(
        <>
          <div className={styles.cardContent}>
            <h1>{title}</h1>
          </div>
        </>
    )
}


export default CardContent