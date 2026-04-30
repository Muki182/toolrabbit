# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

工具兔 (ToolRabbit) is a single-file static website (`index.html`) providing 20+ client-side browser tools (JSON formatter, password generator, Base64, etc.). No build system, no package manager, no backend.

### Running the development server

```bash
cd /workspace && python3 -m http.server 8080
```

Open `http://localhost:8080/` in a browser. All tools run entirely client-side.

### Lint / Test / Build

- **No build step** — the site is a single `index.html` file served as-is.
- **No automated tests** — validate changes by opening the site in a browser and manually testing the affected tool(s).
- **No linter configured** — use standard HTML/CSS/JS best practices.

### Deployment

GitHub Pages via `.github/workflows/deploy.yml` — pushes to `main` auto-deploy.

### Gotchas

- Some browser APIs (`navigator.clipboard`, `crypto.subtle`) require a secure context (`https://` or `localhost`). Always serve via HTTP server, not `file://`.
- Two tools use external APIs: QR code generation (`api.qrserver.com`) and IP lookup (`api.ipify.org`). These need internet access; all other tools work offline.
