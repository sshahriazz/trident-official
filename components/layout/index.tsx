import { ReactNode } from 'react'
import Navbar from '../navbar'
import Footer from '../footer/index'
function Layout({ children }: { children: ReactNode }) {
    return <>
        <Navbar />
        <div className="container mx-auto max-w-7xl px-4">
            {children}
        </div>
        <Footer />
    </>
}
export default Layout