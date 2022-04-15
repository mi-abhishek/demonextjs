import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'
import utilStyles from "../styles/utils.module.css";

export default function Aboutus(){
    return (
        <Layout>
            <Head>
                <title>About us</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <section className={utilStyles.headingMd}>
                <p>This is About us page</p>
            </section>
        </Layout>
    )
}
