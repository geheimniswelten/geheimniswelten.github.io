# geheimniswelten.github.io

Persönliche Projektübersicht mit drei großen Projektkarten und drei kompakteren Demo-Karten. Die Seite besteht aus statischem HTML, CSS und einem kleinen Skript für die URL-Auswahl. Kein Build und keine externen Bibliotheken erforderlich.

## Lokal ansehen

`index.html` im Browser öffnen oder dieses Verzeichnis mit einem statischen Webserver ausliefern. GitHub Pages kann die Seite direkt aus dem Repository-Stamm ausliefern.

## Inhalte pflegen

- Projekttexte, Repository-Links und Tags: `index.html`
- Layout, Farben und responsive Ansichten: `assets/styles.css`
- Symbolische Projektillustrationen (keine App-Screenshots): `assets/images/`
- URL-Auswahl: `assets/projects.js`

Die vorhandene `_config.yml` bleibt erhalten; die eigenständige `index.html` verwendet kein Jekyll-Layout.

## Eine Kachel verlinken

Das Link-Symbol unten rechts an jeder Kachel setzt den Direktlink in der Adresszeile. Ein Fragment springt zur Kachel und hebt sie hervor:

`https://geheimniswelten.github.io/#h5ugrid`

Alternativ hebt ein Query-Parameter die Kachel hervor, ohne die Seite zu verschieben:

`https://geheimniswelten.github.io/?project=h5ugrid`

Verfügbare IDs: `firefox-codex-mcp`, `h5ugrid`, `openaiusagedashboard`, `fmxstyleoverview`, `ospathsdemo`, `dockingdemos`.

Mit JavaScript sind die IDs unabhängig von Groß-/Kleinschreibung. Ein Fragment hat Vorrang vor dem Query-Parameter; die Abschnittslinks `#projekte` und `#demos` heben die Auswahl auf. Unbekannte IDs werden ignoriert. Ohne JavaScript funktionieren die kleingeschriebenen Fragment-Links weiterhin über CSS `:target`.
