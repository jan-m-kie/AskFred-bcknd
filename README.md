# AskFred-bcknd



Dies ist das Backend des Chatbot-Projekts, entwickelt mit **Node.js**, **Express.js**, **TypeScript** und **BullMQ**.  
Es verarbeitet Nutzeranfragen asynchron über eine Redis-Queue und simuliert die Übergabe an KI-Dienste wie Gemini, ChatGPT und Copilot.

---

## 📁 Projektstruktur

```
backend/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
├── .env.example
```

---

## 📄 Dateiübersicht

| Datei/Ordner       | Beschreibung |
|--------------------|--------------|
| `src/index.ts`     | Hauptserver mit Express, BullMQ-Queue und Worker |
| `package.json`     | Projektabhängigkeiten und Startskripte |
| `tsconfig.json`    | TypeScript-Konfiguration |
| `.env.example`     | Beispiel für Umgebungsvariablen (z. B. Redis-URL, Port) |

---

## ⚙️ Setup

### 1. Abhängigkeiten installieren

```bash
npm install
```

### 2. TypeScript kompilieren

```bash
npm run build
```

### 3. Server starten

```bash
npm start
```

---

## 🌐 API-Endpunkt

### `POST /api/sessions/start`

Startet eine neue Session und fügt sie zur Queue hinzu.

**Body:**

```json
{
  "input": "Deine Anfrage"
}
```

**Response:**

```json
{
  "message": "Session started",
  "jobId": "abc123"
}
```

---

## 🔧 Umgebungsvariablen

Erstelle eine `.env`-Datei basierend auf `.env.example`:

```env
REDIS_URL=redis://localhost:6379
PORT=3000
```

---

## 🧠 Verarbeitung

- Die Jobs werden in der Queue `myQueue` gespeichert.
- Ein Worker verarbeitet die Jobs sequentiell.
- Die Verarbeitung simuliert KI-Schritte (Gemini → ChatGPT → Copilot).

---

```

Du kannst diesen Text direkt in deine `README.md` einfügen.  
Möchtest du jetzt mit dem lokalen Test oder dem Deployment fortfahren?
