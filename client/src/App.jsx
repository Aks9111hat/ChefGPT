import styles from "./index.module.css";
import logo from "./assets/diet.png";
import { useState } from "react";

export default function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [dietPlan, setDietPlan] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const plan = await generatePlan();
    setDietPlan(plan);
  };

  const generatePlan = async () => {
    const response = await fetch("http://localhost:3002/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dietDescription: userPrompt }),
    });

    const data = await response.json();
    return data.dietPlan;
  };

  return (
    <main className={styles.main}>
      <img src={logo} className={styles.icon} alt="Diet Planner" />
      <h3>Create Your Healthy Diet</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="plan-description"
          placeholder="Describe your diet requirement"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <input type="submit" value="Generate Diet Plan" />
      </form>
      <center><pre>{dietPlan}</pre></center>
      
    </main>
  );
}