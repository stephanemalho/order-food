import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
