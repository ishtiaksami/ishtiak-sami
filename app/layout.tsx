import { ReactNode } from "react"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export const metadata = {
  title: "Home – Ishtiak Sami",
  description: "Premium websites with modern design, performance, and SEO.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
