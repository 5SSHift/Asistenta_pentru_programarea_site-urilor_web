import { comparatie } from "@/lib/date";

export default function Comparatie() {
  return (
    <section id="comparatie" className="sectiune">
      <h2 className="sectiune__titlu">Compară sortimentele</h2>
      <p>Alege în funcție de intensitate și metoda ta de preparare preferată.</p>
      <table className="tabel-comparatie">
        <thead>
          <tr>
            <th scope="col">Sortiment</th>
            <th scope="col">Intensitate</th>
            <th scope="col">Aciditate</th>
            <th scope="col">Recomandat pentru</th>
            <th scope="col">Preț</th>
          </tr>
        </thead>
        <tbody>
          {comparatie.map((rand) => (
            <tr key={rand.sortiment}>
              <td>{rand.sortiment}</td>
              <td>{rand.intensitate}</td>
              <td>{rand.aciditate}</td>
              <td>{rand.recomandat}</td>
              <td>{rand.pret}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
