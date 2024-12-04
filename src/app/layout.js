import Header from "@/components/Header";
import global from "./global.css"
import "antd/dist/reset.css";
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    )
  }