import styles from "@/styles/About.module.css"
import Image from "next/image"
import Head from "next/head"
export default function About(){
    return(
        <>
        <Head>
            <title>เกี่ยวกับฉัน | Dev shop</title>
            <meta name="keywords" content="Dev shop,ร้านค้า,ขายของ"/>
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>เกี่ยวกับฉัน</h1>
            <Image src={"/about.svg"} width={500} height={500} alt="logo"/> 
        </div>
        </>
    )
}