# Project Context for AI Assistants

## Project Overview

Premium static site for 100xmylife.ai — Nick Sullivan's Personal AI Infrastructure
service. Sells white-glove AI operating systems to founders and executives. This is a
service business, not a software product.

## Tech Stack

- Pure HTML5, CSS3, vanilla JS (ES5) — no framework, no build step
- GitHub Pages deployment (push to `main` = live)
- Google Fonts: Source Serif 4 (display), DM Sans (body), JetBrains Mono (labels)
- CSS custom properties for design tokens, clamp-based responsive typography
- Domain: `100xmylife.ai` (CNAME configured)

## Project Structure

- `knowledge/` - Strategy, messaging, and offer design docs. **Read these before writing any copy.**
- `knowledge/raw/` - Source material (PII-redacted pointers to local files)
- `assets/css/styles.css` - Design tokens and all styles
- `assets/js/main.js` - Minimal interactivity (scroll-reveal, dashboard)
- `designs/` - Theme explorer (5 aesthetic directions)
- `lab/` - Interactive 100x framework visualization
- `docs/specs/` - Implementation specs

## Knowledge Base Is Mandatory

Before writing or editing any site copy, read:

1. `knowledge/site-brief.md` - Positioning, audience, 1x/10x/100x framework
2. `knowledge/brand-voice.md` - Tone, constraints, forbidden language
3. `knowledge/known-constraints.md` - What NOT to claim
4. `knowledge/product-offer.md` - Service mechanics
5. `knowledge/human-in-the-loop.md` - Oversight model

Copy that contradicts these docs is wrong, regardless of how good it sounds.

## Code Conventions

DO:

- Keep the site zero-dependency (no npm, no build tools, no frameworks)
- Use CSS custom properties for all colors, spacing, typography
- Maintain the "confidential strategy memo on heavy paper" aesthetic
- Use `knowledge/` for documentation directories (not `docs/`)

DON'T:

- Add JavaScript frameworks or build tooling without explicit approval
- Commit PII, client names, or internal operating details
- Use em dashes in copy (unless quoting)
- Write copy that sounds like a SaaS landing page or startup pitch

## Brand Voice Constraints

These cause silent quality failures if violated:

- **No hype words**: "revolutionary", "seamless", "game-changing", "fully autonomous"
- **No corporate language**: avoid generic AI jargon, empty futurism, startup chest-thumping
- **No "replace humans" framing**: this is human-supervised AI infrastructure
- **Concrete over abstract**: explain real mechanisms, not just outcomes
- **Premium and calm**: the tone is intimate, sharp, high-agency — not loud
- **Honest about limitations**: current AI is a smart but inconsistent intern; say so elegantly

## The 1x / 10x / 100x Framework

Central to all site messaging:

- **1x: Efficiency** - restore someone to their full capacity
- **10x: Capacity** - turn one person into a team
- **100x: Creativity** - collapse the gap between idea and execution

This ladder shapes the entire site. Get it wrong and the positioning breaks.

## Git Conventions

- Descriptive past-tense messages: "Add feature", "Apply theme", "Tighten copy"
- Occasional emoji prefix for type: added organically, not required
- Reference design principles when relevant in commit messages

## Important Notes

- No build step: editing HTML/CSS/JS and pushing to `main` deploys immediately
- The site sells access to Nick's judgment and ecosystem, not just software
