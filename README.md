# Allenamenti — Volley 2001 Garlasco

App per scrivere, archiviare e riusare gli allenamenti. Scrittura con Apple Pencil,
funziona offline, i dati restano sul dispositivo.

## Uso

Aperta da Safari su iPad: **Condividi → Aggiungi a Home**. Da lì si comporta come
un'app: nessun login, parte anche senza rete.

## Dove stanno i dati

In IndexedDB sul dispositivo. Ogni allenamento chiuso si esporta in PDF e JSON
verso File / iCloud Drive: quella è la copia che sopravvive all'app.

## Struttura

- `index.html` — l'applicazione
- `sw.js` — cache offline
- `manifest.webmanifest` — installazione sulla schermata Home
