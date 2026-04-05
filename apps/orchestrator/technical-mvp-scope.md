# Technical MVP Scope

Dieses Dokument definiert den technischen Zuschnitt des ersten lauffähigen MVPs des Orchestrators.

Ziel ist nicht Vollständigkeit, sondern ein minimaler, sauberer und architekturtreuer erster Lauf.

## Zweck

Dieses Dokument verhindert, dass der erste technische Build zu groß, zu komplex oder architektonisch unsauber wird.

## Grundprinzipien

### 1. Minimal, aber echt
Der MVP soll wirklich laufen, aber nur den kleinsten sinnvollen Kern enthalten.

### 2. Architekturtreue vor Feature-Breite
Nur das wird implementiert, was zur bestehenden Struktur passt.

### 3. Mock vor Komplexität
Externe Abhängigkeiten werden anfangs gemockt oder stark vereinfacht.

### 4. Ein Pfad, kein Parallelbau
Es gibt nur einen offiziellen technischen Ausführungspfad.

## MVP-Ziel

Der erste MVP soll genau diesen Flow technisch abbilden:

```text
request
-> run context builder
-> prompt builder
-> model call
-> minimal result decision
-> response
