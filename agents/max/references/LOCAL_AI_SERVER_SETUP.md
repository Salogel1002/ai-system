# Lokaler KI-Server Setup — Referenz
*Quelle: FAZ Pro Digitalwirtschaft | Gespeichert: 2026-03-18*

## Kern-Architektur

- **Hardware:** Mac mini 32GB Unified Memory (CPU+GPU teilen RAM) → ideal für lokale Modelle
- **Software:** LM Studio (Bedienoberfläche + Modell-Loader von HuggingFace)
- **RAG-System:** AnythingLLM oder Open WebUI (Vektordatenbank für eigene Dokumente)
- **Remote-Zugriff:** LM Link (P2P, noch in Entwicklung) oder Chatbox mit OpenAI-kompatiblem Endpoint

## Modelle die getestet wurden

| Modell | Größe | Qualität |
|--------|-------|---------|
| Qwen 3.5 | 20-25 GB | Gut |
| Nvidia Nemotron | 20-25 GB | Gut |
| Google Gemma | 3 GB | Leichtgewicht |

Beste Embedding-Modelle: `nomic-embed-text`
Beste Sprachmodelle für RAG: Gemma 2, Mistral Nemo

## Wann relevant für EC/Novogenia

- DSGVO-kritische Daten (Kundendaten, DNA-Daten, Patientendaten)
- Wenn wir Novogenia-Partner-Apotheken-Daten lokal verarbeiten wollen
- Wenn Cloud-API-Kosten zu hoch werden

## Wann NICHT relevant

- Für strategische Analyse/Texte → Cloud-Modelle (Claude/GPT) sind überlegen
- Für normale Agent-Workflows → OpenClaw API-Stack reicht

## Setup-Schritte (wenn benötigt)

1. LM Studio installieren auf Mac mini
2. Modell aus HuggingFace laden (Gemma 3 für leicht, Qwen für Qualität)
3. "Als Server" konfigurieren → Endpoint: `http://[MAC-MINI-IP]:1234/v1`
4. AnythingLLM für RAG → Dokumente einlesen → Vektordaten erstellen
5. Von Laptop: Chatbox → Provider: OpenAI → API-Host: Mac mini IP → Key: "lmstudio"

**Status: GEPARKT** — aktivieren wenn DSGVO-kritische lokale Verarbeitung nötig
