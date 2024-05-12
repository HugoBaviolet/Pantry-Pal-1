"use client";
import IngredientsInput from "./components/IngredientsInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IngredientsInput />
    </main>
  );
}
