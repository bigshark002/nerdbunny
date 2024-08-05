import { type FC } from 'react';
import { SvgIconProps } from '@/types';

const SvgX: FC<SvgIconProps> = ({ width = 36, height = 36 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="36" height="35.3077" fill="url(#pattern0_32_633)" />
      <defs>
        <pattern id="pattern0_32_633" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_32_633" transform="scale(0.0192308 0.0196078)" />
        </pattern>
        <image id="image0_32_633" width="52" height="51" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAzCAYAAADYfStTAAAACXBIWXMAAAsSAAALEgHS3X78AAACkUlEQVRogc2a4XHCMAyF348OkBEyQkdgBEZgBEZgBEZgBEZoN8gIjMAG7tFLeqnIsyVLNvjOf2gc+1OlJ0uAlNI++cY9pTSklNBhTuSkl2Xv5RBXJ9S1A8yF7D2tDbo8PMyW9ox9Q5gTOdeTd6wX7d7U9Q6Z/T7l83Lx2Qn1FQyTM/Jua4384GHhG3mBtAaLu2MQzGM/FgYHto69aGvchEuxuHt8NjphcoY959Zag1C+jEm+x/UGjTxbgZB5qfRdJqenSiCVPNcAWVxPG3elyURJ7lkFhDnAt4ZMpEyNJgOMSZ5rgTDHw9aQiZRZV+N6Znn2AI0ZNZOup4076dpmefYA5VxPqpk27jTxl5VnLxAMiVQr+S55jgCyJFJ20HXcMQOp5DkCCIZEyuJiiTuWa9TyHAWUs6xUMxZ37L9nkudIIEsiZZKvWdsNCIZEyiRfDrM8RwPBkEjZDYA9/zKgnOvJRMriLrogdAHhTWqnUCAE1E6WC2wXILywdmoGxFxv6wIbVTs1BULn2qkLEAJqp6obdiug3O05qnbqClTqj3trp65ATL3kqK2dugIxMdgatbVTN6DcPY1ZX3uBrWr+e2A0zQ1tItVKfjOgXFmwjpOI2snkejUw1uaGt3YyXWBrgJglc6WANpG6m/9WmNpGuiWRur53ssCwwNW6RETtVLzAamFCGuk9aifNIUJ7z4ZEWtX8L22ulWfLLDUh165nrp1yB2nSey7Eo6V22hSh3KY18myZTWondgDX95zKaUmk6trJ4g7hLadCIn0cdpnsTE+1k9wgSp4t0/vDqQsDipZn7Qz94dSrYUqupx1/ko/G8myZ3h9O/Ur+B4AjgDuAb/wf0/y3XuMEYAQwVG44ABh/AMyo5cpcZ6h8AAAAAElFTkSuQmCC" />
      </defs>
    </svg>
  )
}

export default SvgX;