# geheimniswelten.github.io

Jekyll-Projektübersicht für GitHub Pages mit acht großen Projektkarten und fünf kompakteren Demo-Karten. Auf dem Desktop stehen jeweils drei Karten nebeneinander; auf kleineren Bildschirmen zwei oder eine. Das konfigurierte Theme liefert Seitenrahmen und Typografie; die Projektkarten ergänzen das Theme. Die Vorschaubilder sind symbolische Illustrationen, keine App-Screenshots.

## Theme und Farben

In `_config.yml` steht das aktive Theme:

```yaml
theme: jekyll-theme-hacker
```

Der vollständige Gem-Name ist erforderlich: `hacker` allein ist kein gültiger Theme-Name. Weitere von GitHub Pages unterstützte Beispiele sind `jekyll-theme-cayman`, `jekyll-theme-midnight` und `jekyll-theme-minimal`. Ein Themewechsel verändert Seitenrahmen, Farben und Typografie. Die Karten bleiben als zusätzliche Komponente erhalten und passen ihre Spaltenzahl an die Inhaltsbreite des Themes an.

Die Kartenfarben kannst du ebenfalls in `_config.yml` anpassen:

```yaml
project_style:
  accent: "#b5e853"
  card_background: "rgba(127, 127, 127, 0.06)"
  card_border: "rgba(127, 127, 127, 0.28)"
```

GitHub-Anleitung: [Ein Theme zu einer Jekyll-Website hinzufügen](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

## Inhalte pflegen

- Namen, Links, Beschreibungen, Bilder, Tags und Gruppierung: `_data/projects.yml`
- Seiteninhalt und Schleife über die Gruppen: `index.html`
- Vorlage für eine einzelne Kachel: `_includes/project-card.html`
- Ergänzende Styles: `assets/styles.css` (auf `.projects-page` begrenzt)
- Einbindung der Styles, Kartenfarben und Skript: `_includes/head-custom.html`
- Vorschaubilder: `assets/images/`
- URL-Auswahl: `assets/projects.js`

Jekyll verarbeitet die Front Matter von `index.html` und erzeugt daraus die fertige Startseite mit dem `default`-Layout des gewählten Themes. Eine eigene Kopie dieses Theme-Layouts ist nicht erforderlich. `.nojekyll` darf nicht vorhanden sein, damit der Build ausgeführt wird. `README.md` ist von der Website-Ausgabe ausgeschlossen.

## Lokal ansehen

Voraussetzungen: Ruby und Bundler. Im Repository-Verzeichnis:

```sh
bundle install
bundle exec jekyll serve
```

Die Vorschau steht dann unter `http://127.0.0.1:4000/`. Nach Änderungen an `_config.yml` den Server neu starten. Die Quelldatei `index.html` direkt im Browser zu öffnen rendert die Jekyll-Vorlagen nicht.

Auf GitHub Pages wird die Seite weiterhin aus `main` und dem Repository-Stamm gebaut. Eine zusätzliche eigene GitHub-Actions-Datei ist für diese Konfiguration nicht erforderlich.

## Eine Kachel verlinken

Das Link-Symbol unten rechts an jeder Kachel setzt den Direktlink in der Adresszeile. Ein Fragment springt zur Kachel und hebt sie hervor:

`https://geheimniswelten.github.io/#hiigrid`

Alternativ hebt ein Query-Parameter die Kachel hervor, ohne die Seite zu verschieben:

`https://geheimniswelten.github.io/?project=hiigrid`

Verfügbare IDs: `dai`, `firefox-codex-mcp`, `openaiusagedashboard`, `hiigrid`, `hiidesk`, `mynovel`, `synowake`, `synoshell`, `fmxstyleoverview`, `ospathsdemo`, `dockingdemos`, `delphiencryptioncompendium`, `decmath-legacy`.

Mit JavaScript bleiben die früheren Links auf `h5ugrid` als Alias für `hiigrid` gültig. Die Repository-Links sind auch für noch nicht veröffentlichte Projekte bereits eingetragen. DelphiEncryptionCompendium verweist auf das Projekt von MHumm.

Mit JavaScript sind die IDs unabhängig von Groß-/Kleinschreibung. Ein Fragment hat Vorrang vor dem Query-Parameter; die Abschnittslinks `#projekte` und `#demos` heben die Auswahl auf. Unbekannte IDs werden ignoriert. Ohne JavaScript funktionieren die kleingeschriebenen Fragment-Links weiterhin über CSS `:target`.
