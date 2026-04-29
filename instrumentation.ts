export async function register() {
  // Fix: Node.js c-ares DNS resolver silently fails SRV lookups on Windows.
  // instrumentation.ts runs before any routes, so this sets Google DNS
  // globally for the entire Next.js server process.
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const dns = await import('dns');
    dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
    console.log('[instrumentation] DNS servers set to Google DNS (8.8.8.8)');
  }
}
