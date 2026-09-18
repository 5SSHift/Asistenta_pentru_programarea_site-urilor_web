"use client";

import { useState, type FormEvent } from "react";

interface DateAbonare {
  nume: string;
  email: string;
  preferinta: string;
}

const stareInitiala: DateAbonare = {
  nume: "",
  email: "",
  preferinta: "filtru",
};

export default function Abonare() {
  const [date, setDate] = useState<DateAbonare>(stareInitiala);
  const [trimis, setTrimis] = useState(false);

  function actualizeazaCamp<K extends keyof DateAbonare>(
    camp: K,
    valoare: DateAbonare[K]
  ) {
    setDate((prev) => ({ ...prev, [camp]: valoare }));
  }

  function trimiteFormular(eveniment: FormEvent<HTMLFormElement>) {
    eveniment.preventDefault();
    setTrimis(true);
  }

  return (
    <section id="abonare" className="sectiune">
      <h2 className="sectiune__titlu">Primești vești despre loturile noi</h2>
      <p>
        Trimitem un e-mail pe săptămână, doar cu originile nou sosite — fără
        reclame, fără spam.
      </p>

      {trimis ? (
        <p role="status" className="confirmare">
          Mulțumesc, {date.nume || "prieten al cafelei"}! Te-am adăugat la
          lista de abonare (formular demonstrativ, fără trimitere reală).
        </p>
      ) : (
        <form className="formular-abonare" onSubmit={trimiteFormular}>
          <div className="camp">
            <label htmlFor="nume">Nume</label>
            <input
              type="text"
              id="nume"
              name="nume"
              placeholder="Numele tău"
              value={date.nume}
              onChange={(e) => actualizeazaCamp("nume", e.target.value)}
              required
            />
          </div>

          <div className="camp">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="adresa@exemplu.com"
              value={date.email}
              onChange={(e) => actualizeazaCamp("email", e.target.value)}
              required
            />
          </div>

          <div className="camp">
            <label htmlFor="preferinta">Preparare preferată</label>
            <select
              id="preferinta"
              name="preferinta"
              value={date.preferinta}
              onChange={(e) => actualizeazaCamp("preferinta", e.target.value)}
            >
              <option value="filtru">Filtru / V60</option>
              <option value="espresso">Espressor</option>
              <option value="ibric">Ibric / French press</option>
            </select>
          </div>

          <div className="camp camp--checkbox">
            <input type="checkbox" id="acord" name="acord" required />
            <label htmlFor="acord">
              Sunt de acord să primesc e-mailuri cu loturi noi
            </label>
          </div>

          <button type="submit">Abonează-mă</button>
        </form>
      )}
    </section>
  );
}
