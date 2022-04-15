import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from "../styles/utils.module.css";

export default function Aboutus(){
    return (
        <Layout>
            <Head>
                <title>About us</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>This is About us page</p>
            </section>
        </Layout>
    )
}
