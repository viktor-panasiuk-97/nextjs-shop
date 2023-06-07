import Link from 'next/link';
import { Container } from '@/components';
import styles from '@/views/Navbar/Navbar.module.scss';
const navbar = [
  {
    name: 'Find a Store',
    href: '/home',
  },
  {
    name: 'Help',
    href: '/help',
  },
  {
    name: 'Join Us',
    href: 'join-us',
  },
  {
    name: 'Sign In',
    href: 'sign-in',
  },
];

export default function Navbar() {
  return (
    <section className={styles.root}>
      <Container>
        <nav>
          <ul className={styles.list}>
            {navbar.map((item) => (
              <li className={styles.item} key={item.name}>
                <Link className={styles.link} href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
