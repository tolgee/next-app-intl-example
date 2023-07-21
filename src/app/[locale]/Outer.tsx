import React from 'react';
import { ClientComponent } from './ClientComponent';

import { Component1 } from './Component1';
import { Component2 } from './Component2';

export function Outer() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Component1 />
      {/* @ts-expect-error Server Component */}
      <Component2 />
      <ClientComponent />
    </>
  );
}
