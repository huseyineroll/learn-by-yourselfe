import * as React from "react"
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkTest } from './layout.module.css'
console. log('container: ', container)

const Layout = ({ pageTitle, pageHeading, children }) => {
    return (
        <main className={container}>
        <title>{pageTitle}</title>
        <nav>
            <ul classNme={navLinks}>
               <li className={navLinkItem} ><Link to="/" className={navLinkTest}>Home</Link></li>
               <li className={navLinkItem}><Link to="/about" className={navLinkTest}>About</Link></li>
               <li className={navLinkItem}><Link to="/contact" className={navLinkTest} >Contact</Link></li>
            </ul> 
        </nav>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
      </main>
    )
  }

 export default Layout