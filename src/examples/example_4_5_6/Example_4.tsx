import {ChangeEvent, useState} from 'react';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';

export const Example_4 = () => {
  console.log('example')

  /* const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value); */

  return (
    <div>
      <div>Lags when change value</div>
      {/* <input type="text" value={value} onChange={onChange} /> */}
      <Input/>
      <SlowComponent />
    </div>
  );
};

function Input() {
  console.log('input')

  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

  return <input type="text" value={value} onChange={onChange} />
}
