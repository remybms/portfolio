import Link from "next/link";
import Hamburger from "./hamburger";
import styles from '@/styles/Static.module.css'

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.hamburger}>
                    <Hamburger />
                </div>
                <Link href="/" className={styles.name}>
                    <div className={styles.firstname}>
                        Rémy
                    </div>
                    <div className={styles.lastname}>
                        Bamas Lunay
                    </div>
                </Link>
                <div className={styles.links}>
                    <Link className={styles.link} href="/">À propos</Link>
                    <Link className={styles.link} href="/#formation">Expérience</Link>
                    <Link className={styles.link} href="/#portfolio">Portfolio</Link>
                    <Link className={styles.link} href="mailto:bamasremy43@gmail.com">Me contacter</Link>
                </div>
            </div></>
    )
}
