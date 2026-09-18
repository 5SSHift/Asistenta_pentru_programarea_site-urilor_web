import { recenzii } from "@/lib/date";

export default function Recenzii() {
  return (
    <section id="recenzii" className="sectiune">
      <h2 className="sectiune__titlu">Ce spun clienții</h2>
      <div className="grid-recenzii">
        {recenzii.map((recenzie) => (
          <blockquote key={recenzie.autor}>
            <p>&bdquo;{recenzie.text}&rdquo;</p>
            <cite>— {recenzie.autor}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
