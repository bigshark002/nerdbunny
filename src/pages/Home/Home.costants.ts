import { joinSquad, lead, build, frens, diamond } from '@/components/images'

export const Title = 'Nerd Bunny, Special Event'

export const Squad = {
  image: joinSquad,
  text: 'Join Squad',
  link: 'joinsquad',
}

export const Actions =[
  {
    id: 0,
    image: diamond,
    text: 'Earn',
    link: 'earn',
  },
  {
    id: 1,
    image: frens,
    text: 'Frens',
    link: '/friend',
  },
  {
    id: 2,
    image: build,
    text: 'Build',
    link: 'build',
  },
  {
    id: 3,
    image: lead,
    text: 'Lead',
    link: 'lead'
  }
]