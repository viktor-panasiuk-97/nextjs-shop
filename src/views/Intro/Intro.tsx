import styles from './Intro.module.scss'

export default function Intro() {
  return (<div className={styles.root}>
    <img className={styles.image} src="images/intro.jpg" alt="" />

    <div className={styles.firstLook}>
      <p className={styles.prevText}>First Look</p>
      <h2 className={styles.title}>Nike Air Max Pulse</h2>
      <p className={styles.content}>
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        —designed to push you past your limits and help you go to the max.
      </p>
      <button className={styles.btn}>Notify me</button>
      <button className={styles.btn}>Shop Air Max</button>
    </div>
  </div>)
}
