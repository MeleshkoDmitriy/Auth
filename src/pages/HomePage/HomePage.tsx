import { FormLogin } from '../../components/FormLogin/FormLogin'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Home</h1>
      <FormLogin />
    </div>
  )
}
