interface TokenInterface {
  id: number;
  redefinePassword?: boolean;
  iat: number;
  exp: number;
}

export default TokenInterface;
