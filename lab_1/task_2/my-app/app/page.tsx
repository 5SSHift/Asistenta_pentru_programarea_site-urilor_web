import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Categorii from "@/components/Categorii";
import Produse from "@/components/Produse";
import Comparatie from "@/components/Comparatie";
import Recenzii from "@/components/Recenzii";
import Abonare from "@/components/Abonare";
import Footer from "@/components/Footer";

export default function Acasa() {
  return (
    <div className="pagina">
      <Sidebar />

      <main className="continut">
        <Hero />
        <Categorii />
        <Produse />
        <Comparatie />
        <Recenzii />
        <Abonare />
      </main>

      <Footer />
    </div>
  );
}
