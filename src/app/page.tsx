import styles from "../app/page.module.css";
import PokemonsView from "@/Presentation/View/Pokemons/PokemonsView";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <PokemonsView />
      </div>
    </main>
  );
}
