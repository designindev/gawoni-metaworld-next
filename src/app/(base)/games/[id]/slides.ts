import Slide1 from 'shared/images/games/slide-1.jpg'
import Slide2 from 'shared/images/games/slide-2.jpg'
import Slide3 from 'shared/images/games/slide-3.jpg'
import Slide4 from 'shared/images/games/slide-4.jpg'
import { Slide } from './GameSlider'

export const slides: Slide[] = [
  {
    full: Slide1,
    thumb: Slide1,
    type: 'image',
  },
  {
    full: '/videos/video-1.mp4',
    preview: Slide2.src,
    thumb: Slide2,
    type: 'video',
  },
  {
    full: Slide3,
    thumb: Slide3,
    type: 'image',
  },
  {
    full: Slide4,
    thumb: Slide4,
    type: 'image',
  },
]
