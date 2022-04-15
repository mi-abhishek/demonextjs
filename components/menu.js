import Link from "next/link";

export default function Menu(){
    return(
        <>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About us</Link></li>
                </ul>
            </div>
        </>
    )

}
