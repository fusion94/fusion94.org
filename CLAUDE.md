# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static website/blog (fusion94.org) using the Norlin theme. The site is hosted on Firebase Hosting and contains blog posts from 2014-2025 covering topics like 3D printing, gaming, conservation, hunting, and technology.

## Essential Commands

```bash
# Install Ruby dependencies
bundle install

# Run local development server (http://localhost:4000)
bundle exec jekyll serve

# Build site for production (output to _site/)
bundle exec jekyll build

# Create new blog post
bundle exec jekyll post "Title of the Post"

# Create new draft
bundle exec jekyll draft "Title of the Draft"

# Publish a draft to _posts/
bundle exec jekyll publish _drafts/draft-filename.md

# Deploy to Firebase Hosting
firebase deploy
```

## Architecture & Structure

### Core Jekyll Directories
- **_posts/**: Blog posts in YYYY-MM-DD-title.md format. Posts use YAML front matter for metadata (title, date, author, tags, description)
- **_layouts/**: Page templates (default.html, post.html, page.html). All layouts extend from default.html
- **_includes/**: Reusable components (header.html, footer.html, head.html, navigation.html, etc.)
- **_pages/**: Static pages like about.md and contact.md
- **_sass/**: SCSS stylesheets organized by component

### Key Configuration
- **_config.yml**: Main Jekyll configuration including site metadata, pagination settings (8 posts/page), and plugin configuration
- **firebase.json**: Deployment configuration pointing to _site/ as the public directory

### Content Features
- **Tagging System**: Posts can have multiple tags, tag pages are auto-generated
- **Disqus Comments**: Integrated on blog posts when disqus_identifier is set
- **Related Posts**: Shown at the bottom of each post
- **Search**: Client-side search functionality
- **Sitemap**: Auto-generated for SEO

### Front Matter Structure
Blog posts typically include:
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS
author: fusion94
tags: [tag1, tag2]
description: "Brief description for SEO"
---
```

### Asset Management
- **images/**: Store all image assets here, reference with `/images/filename.ext` in posts
- **js/**: JavaScript files including jQuery and custom scripts

## Development Workflow

1. New posts go in _posts/ with proper filename format
2. Drafts go in _drafts/ and can be published with jekyll publish
3. The _site/ directory is auto-generated and should not be edited directly
4. Use bundle exec before Jekyll commands to ensure correct gem versions are used