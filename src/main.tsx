import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/index.js"
import { BrowserRouter } from "react-router-dom"

const rootElement = document.getElementById("root")

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  )
} else {
  console.error("Root element with'root' not found.")
}

