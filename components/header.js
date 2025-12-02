import Link from "next/link";
import Hamburger from "./hamburger";
import styles from '@/styles/Static.module.css'

export default function Header() {
    return (
        <>
            <div class={styles.header}>
                <div class={styles.hamburger}>
                    <Hamburger />
                </div>
                <Link href="/" class={styles.name}>
                    <div class={styles.firstname}>
                        Rémy
                    </div>
                    <div class={styles.lastname}>
                        Bamas Lunay
                    </div>
                </Link>
                <div class={styles.links}>
                    <Link class={styles.link} href="/">À propos</Link>
                    <Link class={styles.link} href="/#formation">Expérience</Link>
                    <Link class={styles.link} href="/#portfolio">Portfolio</Link>
                    <Link class={styles.link} href="mailto:bamasremy43@gmail.com">Me contacter</Link>
                </div>
            </div></>
    )
}
