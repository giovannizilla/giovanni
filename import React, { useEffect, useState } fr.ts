import React, { useEffect, useState } from "react";

// App.jsx - Single-file React component (TailwindCSS assumed present)
// Atenção legal: ESTE PROJETO É APENAS PROVA DE CONCEITO. Não use para apostas com dinheiro real
// sem observar as leis locais e sem integrar provedores de pagamento/ID verificações apropriadas.

export default function App() {
  const TABS = ["Home", "1v1", "Torneios", "Carteira", "Perfil"];
  const [activeTab, setActiveTab] = useState("1v1");

  // Wallet (simulado) - balance stored in localStorage
  const [wallet, setWallet] = useState(() => {
    const raw = localStorage.getItem("fc_wallet_balance");
    return raw ? Number(raw) : 100.0; // saldo inicial para testes
  });

  useEffect(() => {
    localStorage.setItem("fc_wallet_balance", String(wallet));
  }, [wallet]);

  // Matches store (open 1v1 challenges)
  const [matches, setMatches] = useState(() => {
    const raw = localStorage.getItem("fc_matches");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("fc_matches", JSON.stringify(matches));
  }, [matches]);

  // Form state for creating match
  const [betAmount, setBetAmount] = useState(10);
  const [mapChoice, setMapChoice] = useState("Battle Royale - Solo");
  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem("fc_player_name") || "Jogador";
  });

  useEffect(() => {
    localStorage.setItem("fc_player_name", playerName);
  }, [playerName]);

  // Notification / logs
  const [log, setLog] = useState([]);
  function pushLog(text) {
    setLog((l) => ["[" + new Date().toLocaleTimeString() + "] " + text, ...l].slice(0, 50));
  }

  // Create an open 1v1 challenge
  function createMatch(e) {
    e?.preventDefault();
    if (betAmount <= 0) return alert("Aposte um valor válido");
    if (wallet < betAmount) return alert("Saldo insuficiente para criar a aposta");

    const id = "m_" + Date.now();
    const newMatch = {
      id,
      host: playerName,
      bet: Number(betAmount),
      map: mapChoice,
      createdAt: Date.now(),
      status: "open", // open | running | finished
    };

    // debit host temporarily
    setWallet((w) => Number((w - betAmount).toFixed(2)));
    setMatches((m) => [newMatch, ...m]);
    pushLog(`${playerName} criou desafio ${id} — R$ ${betAmount}`);
  }

  // Cancel match (only host)
  function cancelMatch(matchId) {
    const match = matches.find((x) => x.id === matchId);z
    if (!match) return;
    if (match.status !== "open")

    echo "# giovanni" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/giovannizilla/giovanni.git
 git push -u origin main

 
