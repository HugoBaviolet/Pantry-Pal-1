"use client";
import IngredientsInput from "./components/IngredientsInput";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center m-3 p-3">
      <h1 className="m-3 font-bold text-5xl p-5" >Pantry Pal</h1>
      <main>

        <IngredientsInput />
      </main>
    </div>
  );
}
