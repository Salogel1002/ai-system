# Implementation Plan

Dieser Plan beschreibt, wie die bestehende Architektur kontrolliert in eine lauffähige Implementierung überführt wird, ohne Strukturverlust oder Kostenexplosion.

## Zweck

Dieses Dokument verhindert, dass die Umsetzung chaotisch erfolgt und stellt sicher, dass:

- Architektur und Code konsistent bleiben
- keine impliziten Abkürzungen entstehen
- Kostenkontrolle erhalten bleibt
- das System schrittweise stabil wächst

## Grundprinzipien

### 1. Architektur vor Code
Kein Modul wird implementiert, ohne dass seine Rolle klar definiert ist.

### 2. Minimaler Kern zuerst
Zuerst wird ein minimaler, funktionierender End-to-End-Flow gebaut.

### 3. Kein Feature-Sprung
Keine parallelen Implementierungen mehrerer komplexer Komponenten.

### 4. Erweiterung statt Umbau
Neue Funktionen werden ergänzt, nicht bestehende Strukturen umgebaut.

### 5. Kontrolle vor Komfort
Bevor Automatisierung oder Komfortfunktionen gebaut werden, muss Kontrolle gewährleistet sein.

## Phase 1: Minimaler Runtime-Kern

Ziel:
Ein einfacher Run funktioniert vollständig.

```text
input
-> run context builder
-> prompt builder
-> model call (einfach / mock)
-> evaluation (minimal)
-> result
