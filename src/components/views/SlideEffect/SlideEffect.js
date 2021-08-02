import React, { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'

import './SlideEffect.css'

const pages = [
    'https://wallpapercave.com/wp/wp6755140.jpg',
    'https://wallpapercave.com/wp/wp4088744.jpg',
    'https://wallpapercave.com/wp/wp6737838.jpg',
    'https://wallpapercave.com/wp/wp6755141.jpg',
    'https://wallpapercave.com/wp/wp6755157.jpg',
    'https://wallpapercave.com/wp/wp8342764.jpg',
    'https://wallpapercave.com/wp/wp6687041.jpg',
    'https://wallpapercave.com/wp/wp7021699.jpg',
    'https://wallpapercave.com/wp/iiGU0b6.jpg'

]

function SlideEffect() {

    const index = useRef(0)
    const [ref, { width }] = useMeasure()

    const [props, api] = useSprings(
        pages.length,
        i => ({
            x: i * width,
            scale: width === 0 ? 0 : 1,
            display: 'block',
        }),
        [width]
    )
    
    const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (active && distance > width / 2) {
            index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
            cancel()
        }
        api.start(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * width + (active ? mx : 0)
            const scale = active ? 1 - distance / width / 2 : 1
            return { x, scale, display: 'block' }
        })
    })
    return (
        <div className='container'>
            <div ref={ref} className='wrapper'>
                {props.map(({ x, display, scale }, i) => (
                    <animated.div className='page' {...bind()} key={i} style={{ display, x }}>
                        <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }} />
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

export default SlideEffect
