import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // -----------------------------------------------------------------------
  // IMPORTANT: Add this line below!
  // Replace 'REPO_NAME' with the actual name of your friend's repository.
  // Example: If the URL is github.com/friend/portfolio, put "/portfolio/"
  // -----------------------------------------------------------------------
  base: "/jiyad2255.github.io/", 

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));