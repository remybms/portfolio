
import { slide as Menu } from 'react-burger-menu'
import { IoReorderThree } from 'react-icons/io5'
import { ImCross } from "react-icons/im";
import Link from 'next/link';
import styles from "@/styles/Static.module.css"

function Hamburger() {
    var style = {
        bmBurgerButton: {
            position: 'absolute',
            width: '42px',
            height: '42px',
            color: '#4A919E',
            top: '0.75rem',
            left: '0.75rem'
        },
        bmMenuWrap: {
            width: '50%',
            height: '93%',
            paddingTop: '10%',
            paddingLeft: '5%',
            top: '3rem',
            backgroundColor: '#CE6A6B',
            color: '#212E53',
            borderRadius: '0px 15px 15px 0px',
        },
        bmCrossButton: {
            height: '30px',
            width: '30px',
        },
        bmCross: {
            background: '#CE6A6B',
        },
    }
    return (
        <div>
            <Menu customBurgerIcon={<IoReorderThree size={42} />} styles={style} customCrossIcon={<ImCross size={30} />}>
            
                    <Link href='/' class={styles.hamburgerLink}>
                        À propos
                    </Link>
                    <Link href='/#formation' class={styles.hamburgerLink}>
                        Expérience
                    </Link>
                    <Link href="/#portfolio" class={styles.hamburgerLink}>
                        Portfolio
                    </Link>
                    <Link href="mailto:bamasremy43@gmail.com" class={styles.hamburgerLink}>
                        Me Contacter
                    </Link>
            </Menu>
        </div>
    )
}
export default Hamburger