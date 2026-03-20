---
title: "Week One — Launching DamageLabs, Reviving CLAHub, and Shipping PTM 1.0"
description: >-
  In seven days I launched a company site, revived a dead open source project, shipped a 14-year-old gem to 1.0, standardized a production VM, and wrote about all of it. Here's everything that happened in DamageLabs' first week.
pubDate: '2026-03-20 06:00 -0500'
tags:
  - damagelabs
  - open-source
  - clahub
  - paper-trail
  - infrastructure
heroImage: '/images/damagelabs-week-one-banner.png'
---

A week ago, [DamageLabs](https://damagelabs.io) didn't have a website. CLAHub had been dead for ten years. Paper Trail Manager was sitting at version 0.8.2 with a failing CI pipeline. My production VM was a collection of hand-started Node processes and inconsistently named directories.

Seven days later, all of that is different.

This is a recap of DamageLabs' first public week — not just what shipped, but how it shipped and why it matters. If you're building an open source company, or maintaining aging software, or trying to figure out how to take a pile of side projects and turn them into something real, this might be useful.

## Day 1–2: DamageLabs.io Goes Live

Every company needs a home on the web. I built [damagelabs.io](https://damagelabs.io) with [Angular 19](https://angular.dev/) and [Express 5](https://expressjs.com/) — not because it's the trendiest stack, but because it's what I know, it's fast, and it gives me server-side rendering for the blog without reaching for a static site generator.

The site launched with:

- **Product pages** for [UAS-Log](https://github.com/DamageLabs/uas-log), [Armory Core](https://github.com/DamageLabs/armory-core), [Whiskey Canon](https://github.com/DamageLabs/whiskey-canon), and Cellar Sync
- **A roadmap** showing what's active, what's planned, and what's on the horizon
- **A blog engine** powered by Markdown files and [gray-matter](https://github.com/jonschlinkert/gray-matter) — no CMS, no database, just files in a `content/` directory
- **An about page** that tells the actual story — [SourceForge](https://sourceforge.net), [Google](https://google.com), [Apple](https://apple.com), Army Airborne, and why collections matter
- **A contact form** via [Resend](https://resend.com) (because nobody needs another SMTP configuration)

The design language: navy backgrounds, amber accents, Inter font, rounded cards with subtle border glow on hover. Dark by default, because that's what I like and I'm the one staring at it.

First blog posts went up the same day. Setting the tone matters when you're building in public.

## Day 3–4: Paper Trail Manager 1.0

[Paper Trail Manager](https://github.com/DamageLabs/paper_trail_manager) has one of the more unusual backstories in Ruby open source. It was created in 2012 by [Igal Koshevoy](https://github.com/igal), a brilliant developer in the Portland tech community. Igal passed away in April 2013 at 37. I took over maintenance because his work deserved to keep living.

For thirteen years, the gem got just enough attention to stay installable. A compatibility patch here, a dependency bump there. Version 0.8.2 lingered. The CI was red. The test suite was thin. It worked, but calling it "maintained" was generous.

The 1.0 push happened in a concentrated week of work:

**Security fix:** The `allow_show?` authorization method was silently ignoring its configuration and falling back to index-level permissions. If you had different view rules for showing individual records vs. listing all records, only the listing rules applied. That's the kind of bug that sits quietly for years because nobody reads the authorization source — they just assume it works.

**Bugs squashed:** The gemspec was overwriting the `authors` field with `email` on every build. A pagination constant was defined but never used. Nested `<tr>` tags in the show view broke rendering in some browsers. An unwrapped `<td>` in the empty state violated HTML spec. Small things, but they add up.

**New features:**
- **Date range filtering** — `?from=2026-01-01&to=2026-03-31` on any index page
- **Install generator** — `rails generate paper_trail_manager:install` creates the initializer and mounts the engine
- **I18n support** — 30 translation keys, so the UI can be localized
- **Default stylesheet** — because unstyled HTML from 2012 is not a good look in 2026

**Infrastructure overhaul:**
- Dropped Rails < 7.0 and Ruby < 3.1 (finally letting go of legacy compat)
- Fixed CI across a matrix of Ruby 3.1/3.2/3.3 × Rails 7.0/7.1 × kaminari/will_paginate
- Resolved [Psych](https://github.com/ruby/psych) YAML deserialization issues that broke on Ruby 3.1+
- Test suite grew from 19 tests to 50
- Published four gems in one day: 0.9.0, 0.9.1, 0.9.2, and 1.0.0

**Stats at 1.0:** [193,000+ total downloads](https://rubygems.org/gems/paper_trail_manager) on RubyGems. Supports Rails 7.0–7.1. Ruby 3.1–3.3. MIT licensed. Still small, still useful, still alive.

Version numbers are arbitrary, but 1.0 means something here. It means the gem is complete — not "we'll never add anything" complete, but "a new user can install this, configure it, and have a working audit log UI in five minutes" complete. It means the security is right. And it means someone is paying attention.

## Day 4–5: CLAHub Rewrite

This is the one that escalated.

[CLAHub](https://cla-hub.io) was a Rails app I used back when managing CLAs for open source projects meant emailing PDFs. It launched in 2012, died in 2016 when nobody restarted the Heroku dyno, and accumulated 58 open issues from people who wanted it to exist but couldn't use it. The code was still there — 254 stars, 37 forks. People clearly wanted this.

I didn't try to patch the Rails 4 app. After 10 years, the stack was too far behind — Rails 4, Ruby 2.x, jQuery, Bootstrap 3, PostgreSQL on Heroku. Fixing it would have meant rewriting most of it anyway.

So I started fresh:

| Old Stack | New Stack |
|-----------|-----------|
| [Ruby on Rails](https://rubyonrails.org/) 4 | [Next.js](https://nextjs.org/) 16 |
| ERB templates | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| PostgreSQL (Heroku) | [SQLite](https://sqlite.org/) (portable) |
| jQuery + Bootstrap 3 | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| OmniAuth | [Auth.js](https://authjs.dev/) v5 |
| GitHub Webhooks | [GitHub App](https://docs.github.com/en/apps) + [Checks API](https://docs.github.com/en/rest/checks) |
| Heroku | [Docker](https://www.docker.com/) / any Node host |

The rewrite addressed all 58 open issues — not individually, but by designing an architecture where entire categories of bugs couldn't happen. The old app broke when GitHub changed their API. The new app uses the Checks API, which is the current, supported way to report status on pull requests.

**New capabilities that didn't exist before:**
- **Organization-wide CLAs** — one agreement covers every repo in your org
- **Corporate CLAs** — sign once with a corporate email domain, all matching contributors are covered
- **Exclusion management** — exempt bots, core team, GitHub teams from CLA requirements
- **REST API** with bearer tokens for CI/CD integration
- **SVG badges** for README files
- **CSV/PDF export** of signature data
- **Docker self-hosting** — `docker compose up -d` and you're running your own instance
- **Custom branding** — white-label with your own name, logo, and colors

CLAHub is live at [cla-hub.io](https://cla-hub.io). The source is at [github.com/DamageLabs/clahub](https://github.com/DamageLabs/clahub). [MIT licensed](https://github.com/DamageLabs/clahub/blob/main/LICENSE).

**The meta-lesson:** Sometimes the best way to address 58 issues is to throw away the code and start over. Not always — but when the stack is 10 years behind and the architecture predates the APIs you need, a rewrite is faster and more reliable than 58 patches.

## Day 5: Infrastructure Standardization

While all of this was shipping, I also standardized the production VM. This doesn't make for exciting reading, but it's the kind of work that prevents 3 AM pages.

**Before:** Hand-started Node processes. Inconsistent directory names. Some apps binding to `0.0.0.0` (publicly accessible without nginx). No process management — kill the SSH session, kill the app.

**After:**
- Every app runs under [systemd](https://systemd.io/) with `Restart=on-failure`
- Consistent directory naming under `/var/www/<domain>/`
- All apps bind to `127.0.0.1` only — nginx handles public traffic
- Shared nginx snippets for security headers, gzip, and static asset caching
- A documented runbook for the entire setup

I spent a decade doing SRE at [Google](https://google.com) and [Apple](https://apple.com). The instinct to standardize infrastructure before it bites you is deeply ingrained. Organic growth is fine for getting started, but it doesn't survive the first incident at 2 AM when you can't remember which directory has which app and whether killing a process will restart automatically or just stay dead.

## Day 6–7: Content, Polish, and UAS-Log

With the infrastructure stable and the major projects shipped, the last two days were about content and tying up loose ends:

**Blog posts written:**
- Welcome to DamageLabs
- First Principles (the product philosophy)
- Building Software for Collectors
- Introducing UAS-Log
- From PM2 to systemd
- Paper Trail Manager 1.0
- CLAHub Is Back
- From SourceForge to DamageLabs (the 27-year founder story)

**UAS-Log fixes:**
- Battery events were using wrong field names — `evt.type`/`evt.date` instead of `eventType`/`eventDate`
- Battery cycle count didn't exist in the API, now computed server-side from events
- Waiver, LAANC, incident, and insurance forms all had field name mismatches with the API schema
- Map page crashed on flights with null GPS coordinates — now filtered with an empty state
- Notification dropdown got real polling (every 5 min), click-to-navigate, and dismiss persistence
- Loading states and error handling added to all form pages
- Seed data consolidated: single file, 200+ flights, 4 loginnable accounts
- 38 new endpoint tests (123 total across 15 suites) covering Phase 2-4 APIs
- Custom SVG branding replaced [TailAdmin](https://tailadmin.com/) placeholder logos
- App footer with DamageLabs branding

That's 12 issues closed and 10 PRs merged on UAS-Log alone in two days.

## By The Numbers

In seven days:

- **8 blog posts** published
- **27 pull requests** merged across 5 repositories
- **67 commits** pushed
- **12 issues** closed
- **4 gems** published to RubyGems
- **1 dead project** revived (CLAHub — dormant since 2016)
- **1 gem** shipped to 1.0 after 14 years (Paper Trail Manager)
- **1 company website** launched (damagelabs.io)
- **1 production VM** standardized
- **5 products** on the roadmap with 2 in active development

## What This Week Taught Me

**Momentum compounds.** Each shipped item made the next one easier. The blog engine built for damagelabs.io made it trivial to publish posts. The systemd runbook made deploying CLAHub a 10-minute task. The CI fixes on PTM gave me confidence to release four versions in a day.

**Old projects are worth reviving.** CLAHub had 254 stars and 37 forks — people wanted it to exist. PTM had 193K downloads — people were using it. Sometimes the best product idea is a product that already exists but stopped being maintained.

**Infrastructure is a product.** The VM standardization, the deploy automation, the monitoring setup — none of this is user-facing, but all of it determines whether the user-facing stuff stays up. I spent time on it early because I've seen what happens when you don't.

**Build in public, but ship first.** I could have spent week one writing a roadmap doc and setting up a newsletter. Instead, I shipped code, then wrote about it. The blog posts came naturally because there was something real to write about.

## What's Next

Week two is about the products:

- **UAS-Log** continues toward v1.0 — the test suite is growing, the seed data is comprehensive, and the UI is getting polished
- **Demo sites** are planned for UAS-Log, Whiskey Canon, and Armory Core — fully functional instances with rich seed data, auto-reseeding every 4 hours
- **[PTM landing page](https://github.com/DamageLabs/paper_trail_manager/issues/80)** at ptm.damagelabs.io — because a gem with 193K downloads deserves more than a README
- **Whiskey Canon and Armory Core** continue active development

I'm building in the open. Follow along on [GitHub](https://github.com/DamageLabs), or just check back when you need a tool for something you collect.

It was a good first week.
