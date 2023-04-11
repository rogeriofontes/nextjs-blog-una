import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/Button.module.css";
import messageStyles from "../styles/Message.module.css";
import Navbar from "../components/navbar";

function HomePage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NextJS Blog with Butter CMS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        
            Hello Word<br />
            <div className={messageStyles.success}>
                Something has been successfully done.
            </div>
            <br />
            <Link href="/blog" legacyBehavior>
                Blog
            </Link>
            <div className={messageStyles.error}>Oop! We ran into a problem.</div>

            <br />
            <button
                className={buttonStyles.button}
                onClick={() => {
                    console.log("Hello");
                }}
            >
                I'm a button
            </button>
        </div>
    );
}

export default HomePage;