# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## SSH

- **Laptop (Karsten):** `karsten@Karsten-Apple-1.local` (auch: `karsten@Mac.fritz.box`)
  - Key: `~/.ssh/id_ed25519` (passwortlos)
  - Obsidian Vault: `~/obsidian/`
  - Enzyme Guide: `~/ENZYME_GUIDE.md`

## Tailscale (Remote-Zugriff von überall)

- **Account:** k.dueh@essentials-concept.de
- **Mac mini:** `tajou@100.123.25.59` — SSH + VNC
- **Laptop:** `100.122.201.98`
- **iPhone:** noch einrichten (App Store → Tailscale → gleicher Account)
- **VNC-Zugriff Login-Screen:** VNC Viewer App → 100.123.25.59:5900

## SE Ranking

- **Data API Key:** `4d1a94b7-1388-9502-927a-64bdc135eed6`
- **Base URL:** `https://api.seranking.com/v1`
- **Plan:** 100.000 Credits, läuft bis 14.03.2026
- **Auth:** `Authorization: Token <key>`

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
