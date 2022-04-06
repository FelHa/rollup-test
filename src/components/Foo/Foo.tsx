import React from 'react';
import { Props } from './Foo.types';

const deep = () => 'deep';
const Foo: React.FC<Props> = ({ message }) => (
  <>
    <div>Foo; {message}</div>
    <div>
      <div>
        <div>
          <div>{deep()}</div>
        </div>
      </div>
    </div>
  </>
);

export default Foo;
