# Simple Greeting Web App

A lightweight Node.js + Express web application that greets users by name. The frontend collects a name, calls a REST API, and displays a personalised welcome message.

## Features

- Clean, card-based UI with a warm amber theme
- Name input page with basic validation
- REST API endpoint that returns a personalised greeting
- Static file serving via Express

## Project Structure

```
simple-greeting-webapp/
├── public/
│   ├── index.html   # Name input page
│   ├── greet.html   # Greeting display page
│   └── style.css    # Shared styles
├── server.js        # Express server & API routes
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or later

### Installation

```bash
git clone https://github.com/your-username/simple-greeting-webapp.git
cd simple-greeting-webapp
npm install
```

### Running the App

```bash
npm start
```

The server starts on **http://localhost:3001**.

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/hi` | Returns a static hello message |
| `GET` | `/api/greet/:name` | Returns a personalised greeting for `:name` |

### Example

```
GET /api/greet/Alice

{ "greeting": "Welcome, Alice!" }
```

## Usage

1. Open **http://localhost:3001/index.html** in your browser.
2. Type your name and click **Show Greeting**.
3. The app calls `/api/greet/:name` and displays the result.
4. Click **Back** to return to the input page.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **Frontend:** Vanilla HTML, CSS, JavaScript
