import { type FC } from 'react';
import { SvgIconProps } from '@/types';

const SvgGiftBlue: FC<SvgIconProps> = ({ width = 70, height = 71 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="70" height="70.8235" fill="url(#pattern0_85_2696)" />
      <defs>
        <pattern id="pattern0_85_2696" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_85_2696" transform="scale(0.0117647 0.0116279)" />
        </pattern>
        <image id="image0_85_2696" width="85" height="86" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABWCAYAAAC+Ydr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAGuUlEQVR4nO2bz28bRRTHv7M//CupE0otVVS0CGgrKkhdxAGJQ8ulx1KJE6emUm9cyjVcwoFze+mtUt3/oOXaA2kRSCioOAcEbVQRhNQCrpqEpPllrwfNzDrYzto7sztjJfF8JGsT7483+/Wb997szBJKKYxTLb0BYBrAOQDHANwHcB3l2h2jpqulcQAXATD7CwBmUK4tmL5d86JWS+ymKgDGIvbeRrk2acjuJP/hdtr9AuXadSM2Q8yKWi1dBXAt5qivUK5Na7bLBL3V54jbAK6iXFvSajfEnKjVEvPOS5JHX0a5VtFkl4WYbyWOnOPhyICw+kUVcey6gqAtzqBcq6a0XeZxMzrURPEHj7lp7XahV1QhKLup0wnOXuYJJannJLe9HHqsNmEdXRdKKShC70pTDVQS2h7j7RZergV9oqYTtMVZVEvqSUskxE9S2NUqrJ7ur5aUZJCPr0KInzXZ1RIK0nuqKF/kBHXGAPeQ2PZHpRLQUzUIxvj1RChLjJe6GawUqpbQty4kPpB9H3AP//9d8ByoPxLbnZzmYSCufhWhIjrkMJv+W4DzqvifrgNbvwF0Le6OUicsfdm/XzmTeQ/w34w+L/gL2HwI0Hr3HtYVyz2HlWLoW4205x0FMu8KYdthNtbvRdlqoWW0pbukYjd6p8N7WFfPn+t/HrtJ5rX1J9177jaXGhUurnhugFDIqlP0zsPBZx1HkwKQPSNCTC/Yj7jxY/dO9gNO6noWYb74z33U/ybbafNa2qCgawHQ7NVygOQckGyYFlhX90/u9M4oNr5vDztzoaDa6lSTw9Sr8I5e456jAl0DXf4O9OWq3A1kXJCDH3bG6zhYXF27xw66Gwqqdahq9oHK/OV/ALekcgrdrIE+f6Bkhhx4B6R4Sq1t9cf3cOrBebWT5NBZ/Hcyf2VSVVAGXfxJ2RRd+RUIYrN6J/6JE8qGJDEnqngorQTdeKouTghdnVc95Zj44fVjRtT5KxfDJ/xqbNYSm6T15SSn6X2OG2LKUy8mOSmhMIJkP8ix0AG0YkbU4zdZt/o4fMKeQimjLIft0/osFQOZo0IraXHv7fskqcmyfooQ4Bz5VOawu3x8f/ymsUlH8sHXc+ziqR4gyOI5Ta+UXz3skaY34m91DC8D6jSm3p4ePZx95rJIANqz7A9bzst/N+xt7G/y5ePoEeZaw196sVH4+8Vm4Xmj6TQM32bFCwU9a9gQp9F08Oxlsef+LS+DQ2PJ6/CHtSO9do2Hn5OJLy5PxTERU4acBSdcZGDRxOzUxIz1VL2w2VlYUfXCe70zOzWx1FLYkpoZtBX/Nq7qgff6lqgze/xmdgui+4eNsZ6qgdmpiQ5PtckqPXOtK3BRWwpbUrHQIWrInNU0FduO2S6qjavp2E727aLaEJCOyO5vRU3B7NSEFVUz99svty1qu9IWZRYiRQ25b/VMREcv7xbVemsyOkTtXp86E74dx2kGQS5Y//e1QbVsc329tPKS5pKeX19d/FNvi3ZCXHfDyxefdu3oLers1ESlfWXyyc+/YfM6i7TJVt81wLaUbQMzc2eLi3WsZJLP7q48/f11rQ2K5ocnlcm+a0P7zvs/unGBz8IRxwXxsnAyBbi5IryRg/AK43Bzo3AyeRDXY5OZxu9mV0BI7DoGmeXpy5GrlYkD4mbEJLGfF9/RpvBk5tFBHWg2QWn/meY9SGzpKSNqVXoKO1JoGgotxEbQ2I9Cd5D+RYo4CAFxff7ZpltoHqsD403RROzrRXo9VZYooQEUix7GRgnqDaDeoHy766A0drWHjKhGXt+OIuM7GMm3Ep7Ybm5RNALwDxN6q+eLJQOCkMU4Q7tK1CiyGYLs9vdC6HZPHrTQT25dil3qLdv9dxW+xz6dHs0EdrMjPAmyyoPH6EGsaIzAfKIaEExoVktziXuUeKmFJuQXmcP2pKdK07OWDpKVeJRKLWCOXUndGlXtG7jQPhw/Dzc7CrcwDq/wCtzcATE69DIgpIcshEit5JHt/tGjqn0jdHSJtx0yWp5Nm1JP8WRF1V+r7gEihN6SabXJ96j2I1LLo2RFtfNXCsiKur+SVXKkYqoVVYFHNy5oFdV2fwVsopJHeqbZeqoBpETdd6OqZEhP36t0/9364u6gMCKqDQGS2EQlj/TLJtZTDaAi6rAnKyMxdahFlR1NwXZ/M9hEJYfSul3rqQaQFnXIR1VKi6FVu/+wjqqMimpDgAQ2Ucmh9Oq+9VQDqIo6rMnKaEwdSlFVRlOw3d8MNlHFo/wWpPVUAyiJOqSjKuVXS5N0/2EbVamJCuA/dk9v9G6cmV0AAAAASUVORK5CYII=" />
      </defs>
    </svg>

  );
};

export default SvgGiftBlue;