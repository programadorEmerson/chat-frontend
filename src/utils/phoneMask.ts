const phoneMask = (value: string): string => {
  // Remove tudo que não for número e limita a entrada aos primeiros 11 caracteres para celular
  const onlyNums = value.replace(/\D/g, '').slice(0, 11);

  // Define a máscara para Telefone Fixo ou Celular com base no comprimento (com o dígito extra do celular)
  const mask = onlyNums.length > 10 ? '(00)0.0000-0000' : '(00)0000-0000';

  return onlyNums.split('').reduce((acc, current) => {
    const nextMaskChar = mask[acc.length];
    if (/\D/.test(nextMaskChar)) acc += nextMaskChar;
    return acc + current;
  }, '');
};

export default phoneMask;
