const cepMask = (value: string): string => {
  const onlyNums = value.replace(/\D/g, '').slice(0, 8);

  if (onlyNums.length <= 2) return onlyNums;
  if (onlyNums.length <= 5) return onlyNums.replace(/^(\d{2})(\d{1,3})/, '$1.$2');
  return onlyNums.replace(/^(\d{2})(\d{3})(\d{1,3})/, '$1.$2-$3');

};

export default cepMask;
