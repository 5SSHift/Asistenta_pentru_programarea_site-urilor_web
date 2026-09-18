import Link from "next/link";
import { navigare } from "@/lib/date";

export default function Antet() {
  return (
    <header className="antet">
      <div className="antet__interior">
        <Link href="#" className="sigla">
          Turnul<span>de Cafea</span>
        </Link>

        <nav className="navigare" aria-label="Navigare principală">
          <ul>
            {navigare.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.eticheta}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#abonare" className="antet__cos">
          Coș · 0 produse
        </a>
      </div>
    </header>
  );
}
