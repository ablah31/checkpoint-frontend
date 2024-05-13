import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center text-2xl bg-orange-400 text-white">
      <h1 className="font-bold">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
