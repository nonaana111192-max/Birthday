"use client";
import { useState } from "react";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import StageThree from "./components/StageThree";
import StageFour from "./components/StageFour";

export default function Home() {
  const [stage, setStage] = useState(1);

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-b from-pink-50 to-white font-sans">
      {stage === 1 && <StageOne next={() => setStage(2)} />}
      {stage === 2 && <StageTwo next={() => setStage(3)} back={() => setStage(1)} />}
      {stage === 3 && <StageThree next={() => setStage(4)} back={() => setStage(2)} />}
      {stage === 4 && <StageFour backToStart={() => setStage(1)} />}
    </main>
  );
}
