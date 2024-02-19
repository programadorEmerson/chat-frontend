const maskCnpj = '00.000.000/0000-00';
const maskCpf = '000.000.000-00';

const cpfCnpjMask = (value: string): string => {
  const onlyNums = value.replace(/\D/g, '').slice(0, 14);
  const mask = onlyNums.length > 11 ? maskCnpj : maskCpf;

  return onlyNums.split('').reduce((acc, current) => {
    const nextMaskChar = mask[acc.length];
    if (/\D/.test(nextMaskChar)) acc += nextMaskChar;
    return acc + current;
  }, '');
};

export default cpfCnpjMask;
