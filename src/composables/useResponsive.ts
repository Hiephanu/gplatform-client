import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

export const useResponsive = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isDesktop = breakpoints.greater('md');
  
  return {
    isDesktop,
  };
}
