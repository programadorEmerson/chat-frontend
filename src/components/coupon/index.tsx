import React, { FC, useState } from 'react';

import { StyledCupon, StyledContainerInput, StyledCuponButton } from './styles.cupon';

const Cupon: FC = () => {
  const [coponCode, setCuponCode] = useState('');
  const [focus, setFocus] = useState(false);

  return (
    <StyledCupon>
      <StyledContainerInput
        $containsValue={Boolean(coponCode.length)}
        $focus={focus}
      >
        <input
          autoComplete='off'
          name='cuponCode'
          onFocus={() => setFocus(true)}
          value={coponCode}
          onChange={(e) => setCuponCode(e.target.value)}
          onBlur={() => setFocus(false)}
          type='text'
        />
        <label htmlFor='cuponCode'>Cupom de desconto</label>
      </StyledContainerInput>
      <StyledCuponButton onClick={() => console.log('cliquei')} />
    </StyledCupon>
  );
};

export default Cupon;
