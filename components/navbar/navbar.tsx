import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <ul>
        <li>
            <Link href="/index">
                Strona główna
            </Link>
        </li>
        <li>
            <Link href="/index">
                Bramy garażowe
            </Link>
        </li>
        <li>
            <Link href="/index">
                Okna PCV
            </Link>
        </li>
        <li>
            <Link href="/index">
                Parapety
            </Link>
        </li>
        <li>
            <Link href="/index">
                Rolety
            </Link>
        </li>
        <li>
            <Link href="/index">
                Żaluzje fasadowe
            </Link>
        </li>
        <li>
            <Link href="/index">
                Drzwi
            </Link>
        </li>
        <li>
            <Link href="/index">
                Rolety wewnętrzne
            </Link>
        </li>
        <li>
            <Link href="/index">
                Automatyka
            </Link>
        </li>
        <li>
            <Link href="/index">
                Kontakt
            </Link>
        </li>   
    </ul>
  );
}

export default NavBar;