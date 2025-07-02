# CrestronAnbindung

Dieses Repository enthaelt einen einfachen Prototypen einer HTML5-Weboberflaeche zur Steuerung eines Crestron-Systems. 

## Dateien

- **index.html** – Hauptseite der Weboberflaeche
- **style.css** – Grundlegendes responsives Layout
- **script.js** – Kommunikationslogik (WebSocket)
- **crestron_api.ush** – Beispielhafte SIMPL+ Header-Datei fuer die verwendeten Signale

## Verwendung

1. Einen WebSocket-Server auf dem Crestron-System bereitstellen, der die Signale `Light_On`, `Volume_Level` und `Source_Select` annimmt.
2. In `script.js` ggf. die WebSocket-Adresse anpassen.
3. Die Dateien auf einem Webserver bereitstellen oder in ein Crestron CH5-Projekt integrieren.

Der Prototyp dient als Ausgangspunkt fuer eine spaetere Integration in ein echtes Crestron-Projekt.
