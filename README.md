# Applied Linguistics Press — Website

Static website for [Applied Linguistics Press](https://www.appliedlinguisticspress.org), a scholar-led, diamond open access academic publisher. Hosted on GitHub Pages.

## Structure

```
alp-site/
├── index.html                  # Homepage
├── 404.html                    # Custom 404 page
├── CNAME                       # Custom domain for GitHub Pages
├── README.md
├── assets/
│   ├── css/
│   │   ├── main.css            # Global styles, variables, shared components
│   │   ├── home.css            # Homepage-specific styles
│   │   ├── catalog.css         # Catalog page styles
│   │   └── inner.css           # Inner pages (About, Publish, FAQ, etc.)
│   ├── js/
│   │   ├── components.js       # Shared topbar, nav, footer (injected into every page)
│   │   └── main.js             # Interactivity: filters, search, active nav
│   └── images/
│       └── alp-logo.svg        # ALP logo (Literata bold, three-colour tiles)
└── pages/
    ├── catalog.html            # Full publication catalog with filters
    ├── about.html              # About, staff, advisory board, reviewers
    ├── publish.html            # Submission guidelines and proposal info
    ├── faq.html                # Frequently asked questions
    ├── series.html             # Book series overview
    ├── resources.html          # Open science resources
    ├── support.html            # Support ALP
    ├── grad-programs.html      # Graduate programs
    └── contact.html            # Contact
```

## Typography & Design

- **Serif:** [Literata](https://fonts.google.com/specimen/Literata) — headings, titles, display text
- **Sans:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) — body, UI, metadata
- **Palette:** Derived from the ALP logo — black (`#231f20`), cyan (`#05a5dc`), red (`#ee4037`), with a deep navy accent (`#1a4a6b`)
- **Background:** Warm off-white (`#f8f6f1`) for a scholarly, non-clinical feel

## Deploying to GitHub Pages

### First-time setup

1. **Create a GitHub repository** named `alp-site` (or any name you prefer) at [github.com/new](https://github.com/new)

2. **Upload the files:**
   ```bash
   cd alp-site
   git init
   git add .
   git commit -m "Initial site launch"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/alp-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under *Source*, select **Deploy from a branch**
   - Select branch: `main`, folder: `/ (root)`
   - Click **Save**
   - Your site will be live at `https://YOUR-USERNAME.github.io/alp-site` within ~2 minutes

4. **Connect your custom domain** (`appliedlinguisticspress.org`):
   - The `CNAME` file in this repo already contains the domain
   - In your **DNS provider** (wherever the domain is registered), add these records:

   | Type  | Name | Value                        |
   |-------|------|------------------------------|
   | A     | @    | 185.199.108.153               |
   | A     | @    | 185.199.109.153               |
   | A     | @    | 185.199.110.153               |
   | A     | @    | 185.199.111.153               |
   | CNAME | www  | YOUR-USERNAME.github.io       |

   - Back in GitHub Pages settings, enter `appliedlinguisticspress.org` under *Custom domain*
   - Check **Enforce HTTPS** once the certificate is issued (usually within 24h)

### Adding a new book to the catalog

Open `pages/catalog.html` and copy an existing `<div class="book-card-wrap">` block. Update these fields:

```html
<div class="book-card-wrap">
  <article class="book-card"
    data-series="general"        <!-- general | syllabi | corpus | affect -->
    data-year="2025"             <!-- publication year -->
    data-type="monograph"        <!-- monograph | edited | syllabi -->
    data-search="keywords here"> <!-- lowercase searchable terms -->
    <div class="book-spine spine-navy"></div>   <!-- spine colour class -->
    <div class="book-body">
      <div class="book-series-tag">Series Name</div>
      <div class="book-title">Full Book Title</div>
      <div class="book-author">Author, A. (2025)</div>
      <div class="book-desc">One or two sentence description.</div>
      <div class="book-footer">
        <div class="badge-row">
          <span class="badge badge-oa">OA</span>
          <span class="badge badge-new">2025</span>
          <span class="badge badge-yr">NNN pp.</span>
        </div>
        <a class="book-dl-link" href="URL-TO-PDF">
          <svg viewBox="0 0 12 12"><path d="M6 1v7M3 6l3 3 3-3"/><path d="M1 10h10"/></svg>
          PDF
        </a>
      </div>
    </div>
  </article>
</div>
```

**Spine colour classes:** `spine-navy` · `spine-red` · `spine-gold` · `spine-green` · `spine-cyan` · `spine-alp-red`

### Updating site-wide info

- **Nav links and footer links:** edit `assets/js/components.js`
- **Colours and fonts:** edit the `:root` variables in `assets/css/main.css`
- **Social media links:** search for `twitter.com`, `youtube.com`, `spotify.com` in `components.js`

## Local development

No build step required. Open `index.html` directly in a browser, or use any local server:

```bash
# Python (built-in)
python3 -m http.server 8000

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8000`.

## License

Site code: MIT License  
Content and publications: © Applied Linguistics Press. Individual works are published under their stated Creative Commons licenses.
