# SYSTEM_MONITOR.md — MAX Playbook v1.0

## Täglicher Check (auf Anfrage)

```bash
# Agenten-Status
openclaw status

# Gateway
curl -s http://100.123.25.59:18789/health

# Dashboard
curl -s -o /dev/null -w "%{http_code}" http://100.123.25.59:7788/

# LaunchAgents
launchctl list | grep -E "openclaw|alex.dashboard"
```

## API-Health-Checks

```bash
# Outlook/Graph
TOKEN=$(python3 -c "import json; d=json.load(open('/Users/tajou/.config/himalaya/ms_tokens.json')); print(d['access_token'])")
curl -s "https://graph.microsoft.com/v1.0/me" -H "Authorization: Bearer $TOKEN" | python3 -c "import json,sys; d=json.load(sys.stdin); print('OK:', d.get('displayName','ERROR'))"

# EasyBill
curl -s "https://api.easybill.de/rest/v1/customers?limit=1" \
  -H "Authorization: Bearer 48b780d42b438e8fb7d856ecc4fe6f402d03529b8a50bfe07bf90d3760f7dd9f" | python3 -c "import json,sys; d=json.load(sys.stdin); print('OK: items=', len(d.get('items',[])))"
```

## Eskalation wenn ROT

- Gateway down → ADMIN + Karsten sofort
- Outlook-Token abgelaufen → refresh_token.sh ausführen
- Dashboard down → LaunchAgent reload
- API-Key ungültig → Karsten direkt (L4)
