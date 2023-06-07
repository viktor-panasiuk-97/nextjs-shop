import styles from './Intro.module.scss';
import { Button, Container } from '@/components';

export default function Intro() {
  return (
    <section>
      <Container>
        <div className={styles.root}>
          <img className={styles.image} src="images/intro.jpg" alt="" />

          <div className={styles.firstLook}>
            <p className={styles.prevText}>First Look</p>
            <h2 className={styles.title}>Nike Air Max Pulse</h2>
            <p className={styles.content}>
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse —designed to push you past your limits and help you go
              to the max.
            </p>
            <Button className={styles.btn}>Notify me</Button>
            <Button className={styles.btn}>Shop Air Max</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
