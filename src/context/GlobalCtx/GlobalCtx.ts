import * as React from 'react';
import { ViewPortTypesEnum } from 'ts/enums';

interface IGlobalCtx {
  viewportType: ViewPortTypesEnum;
}

const GlobalCtx = React.createContext({} as IGlobalCtx);

export default GlobalCtx;
