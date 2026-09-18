import { categorii } from "@/lib/date";

export default function Categorii() {
  return (
    <section className="sectiune">
      <h2 className="sectiune__titlu">Ce cauți astăzi</h2>
      <ul className="lista-categorii">
        {categorii.map((categorie) => (
          <li key={categorie.titlu}>
            <h3>{categorie.titlu}</h3>
            <p>{categorie.descriere}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
