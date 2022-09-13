
import styles from '../styles/banner.module.css'
const Hero =({title,info})=>{
    return(
        <div className={styles.bannerAll}>
            <div className={styles.options}>
                <h2>{title}</h2>
                <p>{info}</p>
                <button>More</button>
            </div>
        </div>
    )
}
export default Hero