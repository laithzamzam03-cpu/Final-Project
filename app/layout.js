import "./globals.css";
import TaskProvider from "@/components/TaskProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "StudentFlow",
  description: "Student Course & Task Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </TaskProvider>
      </body>
    </html>
  );
}
