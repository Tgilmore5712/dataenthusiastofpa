export function getPostgresConnectionString() {
  return (
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