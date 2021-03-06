/*
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';
import { APLContext, APLComponentProvider, APLComponentConsumer } from './context';
import { APLProps } from './AplProps';
import { BaseComponent } from './BaseComponent';

export const APLComponent = function<T extends APLProps>(props: T) {
  const aplCtx: APLContext = {
    items: []
  };
  if (props.definition.items) {
    aplCtx.items = aplCtx.items.concat(props.definition.items);
    delete props.definition.items;
  }
  return (
    <>
      <BaseComponent definition={props.definition} />
      <APLComponentConsumer>
        {(parentCtx) => {
          if (parentCtx) {
            const r = (
              <APLComponentProvider value={aplCtx}>
                {props.children}
              </APLComponentProvider>
            );
            // register
            const lastIndex = parentCtx.items.length-1;
            parentCtx.items[lastIndex] = Object.assign(parentCtx.items[lastIndex], aplCtx);
            return r;
          }
          return null;
        }}
      </APLComponentConsumer>
    </>
  );
};
