import Link from "next/link";
// import Header from '../components/header';
import Header from '@/components/header';
export default function Home() {
  console.log("Executing server component...")
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* It will make our component to refresh the entire application and get the html(jsx) from the server(SSR) */}
      {/* <p><a href="/about">About Us</a></p> */} 
      {/* Now we are having SPA, Which will manage on client side only. (CSR)*/}
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
