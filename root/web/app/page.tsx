import fs from "node:fs";
import path from "node:path";

function readGoogleMapsKeyFromApiEnv() {
  const envPath = path.join(process.cwd(), "..", "api", ".env");
  if (!fs.existsSync(envPath)) return "";
  const envText = fs.readFileSync(envPath, "utf8");
  const line = envText.split(/\r?\n/).find((row) => row.startsWith("GOOGLE_MAPS_EMBED_API_KEY="));
  return line ? line.split("=").slice(1).join("=").replace(/^["']|["']$/g, "").trim() : "";
}

export default function Home() {
  const key = readGoogleMapsKeyFromApiEnv();

  return (
    <main className="p-6 font-mono">
      {!key ? <p>GOOGLE_MAPS_EMBED_API_KEY not found in root/api/.env</p> : null}
      <iframe
        title="Map"
        width="100%"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=Oslo`}
      />
    </main>
  );
}
