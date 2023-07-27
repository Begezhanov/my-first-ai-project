import Landing from "@/components/home/landing";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import styles from "./styles.css";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    session !== null ? (
      // <Chat character="David Goggins" />
      <>
        <Link href="/david" className={`p-8 border rounded button davidButton `}>
          Get motivated by David Goggins
        </Link>
        <Link href="/irina" className={`p-8 border rounded button irinaButton`}>
          Get motivated by Irina Khakamada
        </Link>
      </>

    ) : (
      <Landing />
    )
  );
}
