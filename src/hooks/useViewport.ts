import { useState, useEffect } from 'react';
import { ViewPortTypesEnum } from 'ts/enums';

const getViewport = (): ViewPortTypesEnum => {
  const viewPortWidth = document.getElementsByTagName('html')[0].offsetWidth;

  if (viewPortWidth < 768) {
    return ViewPortTypesEnum.phone;
  }

  if (viewPortWidth < 992) {
    return ViewPortTypesEnum.tablet;
  }

  if (viewPortWidth < 1200) {
    return ViewPortTypesEnum.desktop;
  }

  return ViewPortTypesEnum.largeDesktop;
};

export default function useViewport(): ViewPortTypesEnum[] {
  const [viewport, setViewport] = useState(getViewport());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const oldResize: ReturnType<(a: UIEvent) => any> | null = window.onresize;
  const onResize = (evt?: UIEvent) => {
    evt && oldResize?.(evt);
    return setViewport(getViewport());
  };
  window.onresize = onResize;

  useEffect(() => {
    onResize();
  }, []);

  return [viewport];
}
