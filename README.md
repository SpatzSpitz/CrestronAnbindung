# CrestronAnbindung

Dieses Repository enthaelt einen einfachen Prototypen einer HTML5-Weboberflaeche zur Steuerung eines Crestron-Systems.
Zusätzlich ist eine Node.js-Anwendung enthalten, die als Brücke zwischen WebSocket-Clients
und dem Crestron-System fungiert.

## Dateien

- **index.html** – Hauptseite der Weboberflaeche
- **style.css** – Grundlegendes responsives Layout
- **script.js** – Kommunikationslogik (WebSocket)
- **crestron_api.ush** – Beispielhafte SIMPL+ Header-Datei fuer die verwendeten Signale

## Verwendung

1. Abhängigkeiten installieren und den Node.js-Server starten:

   ```bash
   npm install
   npm start
   ```

   Der Server öffnet einen WebSocket auf Port `8080` und stellt gleichzeitig eine TCP-Verbindung
   zum Crestron-System unter `192.168.1.100:41794` her.

2. In `script.js` ggf. die WebSocket-Adresse anpassen.
3. Die Dateien auf einem Webserver bereitstellen oder in ein Crestron CH5-Projekt integrieren.

Der Prototyp dient als Ausgangspunkt fuer eine spaetere Integration in ein echtes Crestron-Projekt.
