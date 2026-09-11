import { navigare } from "@/lib/date";

export default function Sidebar() {
  return (
    <header className="sidebar">
      <div className="sidebar__sigla">
        <h1 className="sidebar__nume">
          Turnul<span>de Cafea</span>
        </h1>
        <p className="sidebar__rol">prăjitorie artizanală</p>
      </div>

      <nav className="sidebar__nav" aria-label="Navigare principală">
        <ol>
          {navigare.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.eticheta}</a>
            </li>
          ))}
        </ol>
      </nav>

      <a href="#abonare" className="sidebar__cos">
        Coș · 0 produse
      </a>
    </header>
  );
}
