import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
                <Image src="/youtube.png" alt="youtube" width={24} height={24}/>

            </div>
            <div className={styles.logo}>DataBlog</div>
            <div className={styles.links}>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>

            </div>

        </div>

    )
}
export default Navbar