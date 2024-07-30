import React from "react";
import Image from "next/image"
import styles from "./featured.module.css"
const Featured=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}><b>¡Hey, Patricia here!</b> Discover my stories and creative ideas. </h1>
        <div className={styles.post}>
            <div className={styles.imgContainter}>
                <Image src="/p1.jpeg" alt="" fill/>
            </div>
            <div className={styles.textContainter}>
                <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsam exercitationem, sequi temporibus ad dolorum corrupti quisquam delectus.</p>
                <button>Read more</button>
            </div>

        </div>
        </div>
    )
}
export default Featured