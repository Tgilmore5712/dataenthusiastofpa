function normalizeConnectionString(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  const startsWithQuote = trimmed.startsWith('"') || trimmed.startsWith("'");
  const endsWithQuote = trimmed.endsWith('"') || trimmed.endsWith("'");

  if (startsWithQuote && endsWithQuote && trimmed.length >= 2) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

export function getPostgresConnectionString() {
  return normalizeConnectionString(
    process.env.POSTGRES_URL ??
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.DATABASE_URL ??
    process.env.NEON_DATABASE_URL ??
    process.env.PRISMA_DATABASE_URL ??
    process.env["padata_POSTGRES_URL"] ??
    process.env["padata_PRISMA_DATABASE_URL"] ??
    ""
  );
}

export function ensurePostgresUrl() {
  const connectionString = getPostgresConnectionString();

  if (!connectionString) {
    return "";
  }

  if (!process.env.POSTGRES_URL) {
    process.env.POSTGRES_URL = connectionString;
  }

  return connectionString;
}