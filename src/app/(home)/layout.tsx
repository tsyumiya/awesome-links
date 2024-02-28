import ReactNode from "react"
import Header from "../components/header"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
