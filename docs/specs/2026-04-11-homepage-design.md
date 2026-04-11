# Homepage v1 — Design Spec

Date: 2026-04-11
Branch: `feature/homepage-v1`
Status: Approved to build

## What this is

The first real homepage for 100xmylife.ai — replacing the single placeholder `index.html`. It sits downstream of the `knowledge/` pack (brand voice, site brief, product offer, 100x framework) and upstream of later pages (How it Works, Framework, Oversight, Use Cases, FAQ, Apply). This spec covers the homepage only.

## Audience and job-to-be-done

Founder-level operators who already have leverage but want more — people comparing "hire a chief of staff" against "build a personal AI operating system." The homepage needs to:

1. Qualify the premium buyer and filter out the $99/mo-automation-pack crowd
2. Make the 1x → 10x → 100x progression land as a structural idea, not a slogan
3. Establish that this is human-supervised, not autonomous — trust is the product
4. Get the right person to apply or book an exploratory conversation

## Aesthetic direction

**Editorial parchment.** The anti-move for an AI services site.

- Background: warm parchment (`#f4ece0`)
- Ink: near-black (`#15130e`)
- Accent: oxblood / terracotta (`#a83919`)
- Support: warm taupe (`#6b5d4d`), soft rule lines
- Display: **Fraunces** (variable — wght + SOFT axes)
- Body: **Instrument Sans** (characterful, not Inter)
- Marginalia / labels: **JetBrains Mono**

Feel: a confidential strategy memo printed on heavy paper, not a SaaS landing page. Competitors look like dashboards; this looks like an essay by someone who has already won.

## Page structure

Numbered here for discussion, but coded with descriptive anchors (no `#section-3`).

1. **Masthead** — site name in marque, tiny nav with one live link ("Apply") and placeholders for eventual deep pages, directional tagline in mono ("personal ai infrastructure / private rollouts").
2. **Hero** — oversized Fraunces headline: *"Build a private operating system for your life and business."* Subhead in Instrument Sans reframes it as human-supervised personal AI infrastructure. Two CTAs: primary "Apply for a private rollout" (oxblood solid), secondary "See if it fits" (ink outline). A marginalia note off to the right: *"Not a chatbot. Not an automation agency. A bespoke system, iterated with you."*
3. **The 1x → 10x → 100x ladder** — the centerpiece. Three stacked tiers with oversized Fraunces numerals ("1×", "10×", "100×") whose SOFT axis animates from hard to soft as they scroll into view. Each tier: a one-line promise, a two-sentence mechanism, and a marginalia annotation describing what it feels like day-to-day. Vertical climb emphasizes sequence ("build 1x before 10x before 100x") per the knowledge doc.
4. **How it works** — four steps in an editorial grid: *Discover → Design → Install → Iterate*. Each step has a concrete verb-led description. Numbered with mono labels ("01 / 04", etc).
5. **What you actually get** — an antidote-to-is-this-just-ChatGPT list. Five items: memory & context systems, specialized agents, workflow design, human oversight integration, access to Nick's ecosystem. Each with a one-line demystification.
6. **Human oversight — why this isn't autonomous** — full-width block with a pull-quote treatment. Explains approval gates, quality checks, Nick-in-the-loop. Differentiator, not a footnote.
7. **Client patterns** — anonymized arc (one founder: single assistant → multi-agent daily workflow → central to operations). No named testimonials. Framed as "what we've seen work."
8. **Who this is / isn't for** — two-column list. Filters tire-kickers. Signals confidence through selectivity.
9. **FAQ** — five questions, short answers. "Is Nick actually doing the work?" / "What if I leave?" / "Is my data safe?" / "What does this cost?" / "How long until I see value?"
10. **Closing CTA + ecosystem bridge** — final ask, with a link out to TechNickAI.ai as the broader identity layer.
11. **Footer** — minimal. Current year, a mono line ("an instrument of TechNickAI"), nothing else.

## Explicit non-goals

- No pricing table (stays directional per `known-constraints.md`)
- No logo wall / named testimonials (no permission yet)
- No accessibility affordances (per Nick's standing note)
- No generic AI automation language
- No em dashes in copy (per Nick's writing style)
- No stock illustrations or hero images
- No cookie banner, no analytics tracking pixels in v1
- No forms — CTAs are mailto or external links for now

## Technical shape

- Single static HTML file, external CSS, minimal JS
- Google Fonts: Fraunces (variable, wght+SOFT), Instrument Sans, JetBrains Mono
- CSS custom properties for the palette and type scale
- `IntersectionObserver` for the Fraunces SOFT-axis animation on numerals
- No build step, no framework, no bundler
- Structure:
  - `index.html`
  - `assets/css/styles.css`
  - `assets/js/main.js`
- Target: GitHub Pages (CNAME already in place)

## Success criteria

- A founder-level visitor reads the hero and knows in 10 seconds this is premium, bespoke, human-supervised
- The 1x → 10x → 100x ladder reads as a sequence, not a menu
- The page looks completely unlike any other AI services site in the category
- Copy passes the brand-voice rules: no hype, no corporate language, no em dashes, concrete over abstract
- Builds and renders on GitHub Pages with no warnings

## Implementation plan

1. Write `index.html` with full semantic structure and placeholder-free copy
2. Write `assets/css/styles.css` with design tokens, typography, layout, and motion
3. Write `assets/js/main.js` — IntersectionObserver for numeral animation only
4. Remove or replace the old placeholder `index.html` content
5. Commit on `feature/homepage-v1`
6. Run `/multi-review` for multi-agent review pass
7. Address review notes in follow-up commits
8. Open PR against `main`
