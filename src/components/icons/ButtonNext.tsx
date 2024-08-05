import { type FC } from 'react';
import { SvgIconProps } from '@/types';

const SvgNext: FC<SvgIconProps> = ({ width = 8, height = 13 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="8" height="12.6316" fill="url(#pattern0_10_232)" />
      <defs>
        <pattern id="pattern0_10_232" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_10_232" transform="scale(0.0526316 0.0333333)" />
        </pattern>
        <image id="image0_10_232" width="19" height="30" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAACXBIWXMAAAsSAAALEgHS3X78AAABYElEQVRIia2VwVHDMBBFPyh30oGgAtJB3AHpAHzRGTqgBLjqEqcCUoLpIOkAdUAK0JjZzMpj7JUsZbLHrPP0tft3ddN1Ha4VC+JoZVoAa2aeAFTO20PpGbfCb3cAWq3M5hqwAPzSyrxcAmsi+W0J8Axz3hKsTgDfc2D/uqmVqQDs+Zrj2Dlvkyon1tDKrKgBlwBFn80AvwFsnLe/44TYTfYYAY9Ces3WWWYpGyhcssJHIX1kc/cKYz4LCunDKqKQDjhwSeZhI+BOEs9XPgOLBl0rQ358ls503t4Xbw2tDPnwSUjVpcpSlnmYrVkm6NN5+5MF42FPTcUrcrrJoG0E9DYcr0UmSIqat00fUWVamY8SUFRZwk8nHvJW+t8ENgNKPjQ9jId6P3ilikAINRtsBwlEQ77KefqCsiZ3zcwqAzBZdKWgIWwctG6KQBThmqFeVOgmjEdp9Fsj7PRSNX0A+APCKqVslFFrWwAAAABJRU5ErkJggg==" />
      </defs>
    </svg>
  )
}

export default SvgNext;