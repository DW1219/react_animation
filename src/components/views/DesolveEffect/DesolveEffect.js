import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import './DesolveEffect.css'



function DesolveEffect() {

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
    //'photo-1544511916-0148ccdeb877',
    //'photo-1544572571-ab94fd872ce4',
    //'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
    //'photo-1540206395-68808572332f',
    ]

    const [Index, setIndex] = useState(0)

    const transitions = useTransition(Index, {
      key: Index,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 3000 },
    })

    useEffect(() => {
      const t = setInterval(() => setIndex(state => (state + 1) % pages.length), 4000)
      return () => clearTimeout(t)
    }, [])

    return (

    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className="bg"
          style={{
            ...style,
            backgroundImage: `url(${pages[i]})`,
          }}
        />
      ))}
    </div>

    )
}

export default DesolveEffect
