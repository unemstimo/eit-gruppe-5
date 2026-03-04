import fs from "node:fs";
import path from "node:path";

function getEnvValue(envText: string, keyName: string) {
  for (const line of envText.split(/\r?\n/)) {
    if (!line.startsWith(`${keyName}=`)) continue;
    return line.slice(keyName.length + 1).replace(/^["']|["']$/g, "").trim();
  }
  return "";
}

export default function Home() {
  const envPath = path.join(process.cwd(), "..", ".env");
  const envText = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
  const key = getEnvValue(envText, "GOOGLE_MAPS_EMBED_API_KEY");

  return (
    <main className="p-6 font-mono">
      <h1 className="mb-4 text-2xl font-bold">Google Maps</h1>
      {!key ? <p>Map is unavailable</p> : null}
      {key ? (
        <iframe
          title="Map"
          width="100%"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=Oslo`}
        />
      ) : null}
    </main>
  );
}
