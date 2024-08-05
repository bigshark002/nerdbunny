import { type FC } from 'react';
import { SvgIconProps } from '@/types';

const SvgNext: FC<SvgIconProps> = ({ width = 8, height = 13 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="8" height="12.6316" fill="url(#pattern0_33_47)" />
      <defs>
        <pattern id="pattern0_33_47" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_33_47" transform="scale(0.0526316 0.0333333)" />
        </pattern>
        <image id="image0_33_47" width="19" height="30" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/klEQVRIia3W4Q2CMBAF4CcL2BEYgREYwRE6giM4Am6gE+gIjIAbMAJO8ExNm9Sk1/Yql9wfaL7QctxxIIm9ovPODIA+NwBDi98lrh09ftoDC+ADgFVp7sxIWsph/Zpixgty4EWLuRxJbgJ402Iuh1ZQupEDZ5JGg7nsSS4CuKTA0qEaDVjzynPg6o+kGgvgTQC3ANZiISVwbcFcPgXQaqFcyfR7QZNmm7bmq6iFpDhr6kzVmnLQpIFyWK5AR+kBtNCQ2ckPZnx7aYJirNQd+poSKn0iyb4lZRh1JjG4XgBGP5T/mpt3LRRjboK7eAO4+uGrglzEPy5hq2rkGwA+NWWJyu8xUkEAAAAASUVORK5CYII=" />
      </defs>
    </svg>
  )
}

export default SvgNext;