import React, { Suspense } from 'react';
import styles from './Bar.module.scss';
import { Props } from './Bar.types';
import Foo from '../Foo/Foo';
// const Foo = React.lazy(() => import('../Foo/Foo'));

// import { TestComponentProps } from "./TestComponent.types";

const Bar: React.FC<Props> = ({ message }) => (
  <div className={styles.bar}>
    Bar: {message}
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <Foo message="lazy foo" />
    {/* </Suspense> */}
  </div>
);

export default Bar;
