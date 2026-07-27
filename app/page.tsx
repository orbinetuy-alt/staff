import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="page-canvas" aria-hidden="true" />
    </main>
  );
}
