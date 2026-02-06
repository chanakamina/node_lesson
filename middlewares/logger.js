export default function logger(req, res, next) {
  const now = new Date().toISOString();
  try {
    const ip = req.ip || req.connection?.remoteAddress || 'unknown';
    console.log(`[${now}] ${req.method} ${req.originalUrl} - IP: ${ip}`);
    // console.log('Headers:', JSON.stringify(req.headers));
    if (req.body) {
      console.log('Body:', JSON.stringify(req.body));
    }
  } catch (err) {
    console.log('Logger middleware error:', err);
  }
  next();
}
