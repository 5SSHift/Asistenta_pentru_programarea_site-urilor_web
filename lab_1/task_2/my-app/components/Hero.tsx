import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eticheta">Prăjită săptămânal, în loturi mici</p>
        <h2>
          Cafea de origine, prăjită cu doar trei zile înainte să ajungă la
          tine.
        </h2>
        <p className="hero__descriere">
          Lucrăm direct cu ferme mici din Etiopia, Columbia și Guatemala și
          prăjim fiecare comandă la cerere — nu ținem stoc vechi pe raft.
        </p>
        <a href="#produse" className="buton buton--plin">
          Vezi boabele din această săptămână
        </a>
      </div>
      <Image
        src="https://picsum.photos/seed/prajitorie/640/560"
        alt="Boabe de cafea proaspăt prăjite, într-un vas metalic"
        width={640}
        height={560}
        className="hero__imagine"
        priority
      />
    </section>
  );
}
