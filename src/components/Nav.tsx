import { ReactNode } from 'react'
import Link from 'next/link'

export const Nav = ({ children }: { children: string }): ReactNode => {
  return (
    <nav>
      {children}
      <ul>
        <li>
          <Link href="/">Home app</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout app</Link>
        </li>
        <li>
          <Link href="/locations">Locations app</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
