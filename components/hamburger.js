"use client"

import { slide as Menu } from 'react-burger-menu'
import { IoReorderThree } from 'react-icons/io5'
import { ImCross } from "react-icons/im";
import Link from 'next/link';


function Hamburger() {
    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '42px',
            height: '42px',
            marginLeft: '1.25rem',
        },
        bmMenuWrap: {
            width: '50%',
            height: '100%',
            marginTop: '10%',
            paddingTop: '10%',
            paddingLeft: '5%',
            backgroundColor: '#CE6A6B',
            color: '#212E53'
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
            <Menu customBurgerIcon={<IoReorderThree size={42} />} styles={styles} customCrossIcon={<ImCross size={30} />}>
                    <Link href="mailto:bamasremy43@gmail.com" className='w-fit mb-2'>
                        Me Contacter
                    </Link>
                    <Link href="/portfolio" className='w-fit'>
                        Portfolio
                    </Link>
                    <Link href='/' className="w-fit mt-2">
                        À propos
                    </Link>
            </Menu>
        </div>
    )
}
export default Hamburger