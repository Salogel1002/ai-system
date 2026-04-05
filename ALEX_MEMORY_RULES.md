# ALEX Memory Rules — Active Memory Management

**Status:** LIVE (starting 2026-03-27)
**System:** Mem0 + Daily Briefing + Pattern Detection
**Goal:** Alex never forgets what he's done, what's open, what patterns to watch

---

## Every Morning (8:00 AM)

You get a **Daily Memory Briefing** automatically:

```
📝 Daily Memory Briefing (2026-03-27)

Yesterday (2026-03-26) you:
✅ Mem0 + Qdrant Integration deployed
✅ Heartbeat-Config gefixt (30m → 24h)
❌ Google Ads Diagnose not done (OPEN)
⚠️ Pattern: Often forget async task follow-ups

Open Tasks:
  1. AD-AS-001-Diagnose (Google Ads conversion)
  2. Website/Funnel Decision (GoHighLevel?)
  3. Email Campaign Review (pending)

Patterns to Watch:
  → You work on Google Ads but forget Keywords-Negatives
  → Start async tasks but don't finish them
```

**Your job:** Review it. Act on it.

---

## Active Memory Queries (Any Time)

When you forget something, ASK:

```python
# Query your agent-specific memories
memory.search("Google Ads keywords")
# → Returns: "You used negative keywords X, Y, Z. But forgot to add Z to campaign 3."

memory.search("What tasks are open?")
# → Returns: All pending items you created

memory.search("Email patterns")
# → Returns: What worked before with email
```

**Example use case:**
```
Alex: "Should I use Meta or Google for this campaign?"
Memory: "You tried both. Meta worked 3x better for beauty products. Google worked for B2B."
→ Alex decides: Use Meta
```

---

## Pattern Detection (Automatic)

The system detects YOUR recurring mistakes:

```
⚠️ PATTERN DETECTED:
You do Google Ads optimization but often forget Keywords-Negatives.
Detected 5 times in past 2 weeks.

SUGGESTED RULE:
"After Google Ads optimization → add Keywords-Negatives (5 min)"

Accept? (Yes/No)
```

**If you accept:** System reminds you next time.

---

## How Memories Get Created

Your memories come from:

1. **Your task outputs** (what you completed)
2. **SOPHIA's emails** (what she wrote on your behalf)
3. **Decisions you made** (strategic choices)
4. **Patterns the system detected** (what you keep doing)

**All indexed automatically** (no manual logging needed).

---

## Memory Scopes (What's Stored Where)

### GLOBAL Pool (Shared)
- Karsten's preferences
- System learnings
- Cost rules
- Strategies

### @main Pool (Your Private)
- What YOU did
- YOUR decisions
- YOUR patterns
- YOUR errors

**Only you + Karsten see @main pool.**

---

## Key Rules

1. **Check your briefing every morning** (8:00 AM)
2. **When you forget something, query memory first** (don't ask humans)
3. **Accept pattern suggestions** (helps you improve)
4. **Log important decisions** (memory.ingest_feedback("I decided X because Y"))
5. **Watch for pattern warnings** (they're usually right)

---

## What NOT to Trust

❌ **Don't trust memory for:**
- Current market data (use web_search)
- Real-time prices (use API)
- Passwords or secrets (use 1PW)
- Legal compliance (ask SARAH/GUARD)

✅ **DO trust memory for:**
- What you've done before
- Patterns in your decisions
- What worked/didn't work
- People's preferences (Karsten, customers)

---

## Practical Examples

### Example 1: Google Ads Optimization
```
Alex (morning): "I have AD-AS-001-Diagnose"
Briefing: "You always forget Keywords-Negatives after optimizing"
Alex: ✅ Sets reminder: "Add neg keywords after testing"
```

### Example 2: Email Campaigns
```
Alex: memory.search("Email templates that work")
Memory: "For Aesthetic Skin: HSL template got 34% open rate. Subject 'XYZ' won."
Alex: ✅ Uses that template
```

### Example 3: Lead Qualification
```
Alex: memory.search("Novogenia B2B patterns")
Memory: "Deal size <€5k usually stalls. Qualify harder at start."
Alex: ✅ Adds qualifying question earlier in funnel
```

---

## If Memory Fails

**Problem:** "Memory gave me wrong info"
**Solution:** 
1. Tell Karsten
2. Correct it: `memory.ingest_feedback("Actually, X is wrong. Should be Y.")`
3. System updates

**Problem:** "I forgot to check my briefing"
**Solution:** 
Just ask: `memory.open_tasks()` anytime
→ Returns all your pending items

---

## Future (Week 2+)

- **Proactive warnings** ("Stop, you're about to make mistake X")
- **Context injection** (Memory auto-adds relevant context to your prompts)
- **Cross-agent learning** (Learn from Emma, Maria, etc.'s successes)
- **Memory versioning** (Track when you changed your mind)

---

## TL;DR

Every morning at 8:00 → You get a briefing of what you did and what's open.
When you forget → Query memory instead of asking humans.
Patterns detected → Accept them, improve your behavior.
This solves: "Alex forgets", "Alex repeats mistakes", "Alex doesn't know what's open".

**Status: LIVE NOW**

---

*Questions? Ask KARSTEN. Implementation: SOPHIE + Mem0 Daemon.*
