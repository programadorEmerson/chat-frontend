const validateToken = (token: string) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    const base64Url = parts[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const payload = JSON.parse(Buffer.from(base64, 'base64').toString());

    if (!payload.exp || typeof payload.exp !== 'number') return false;

    const now = Math.round(new Date().getTime() / 1000);
    return now < payload.exp;
  } catch (error) {
    return false;
  }
};

export default validateToken;
