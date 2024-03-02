import Head from "next/head"
import LinksTable from "../components/links-table"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LinksTable />
    </div>
  )
}
