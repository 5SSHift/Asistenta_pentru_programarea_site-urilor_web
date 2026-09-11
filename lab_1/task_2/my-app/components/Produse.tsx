import Image from "next/image";
import { produse } from "@/lib/date";

export default function Produse() {
  return (
    <section id="produse" className="sectiune">
      <h2 className="sectiune__titlu">Loturile săptămânii</h2>
      <div className="grid-produse">
        {produse.map((produs) => (
          <article key={produs.nume} className="card-produs">
            <Image
              src={produs.imagine}
              alt={`Pungă de cafea ${produs.nume}`}
              width={360}
              height={300}
            />
            <div className="card-produs__info">
              <h3>{produs.nume}</h3>
              <p>{produs.descriere}</p>
              <div className="card-produs__jos">
                <span className="pret">{produs.pret}</span>
                <a href="#" className="buton buton--mic">
                  Adaugă în coș
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
