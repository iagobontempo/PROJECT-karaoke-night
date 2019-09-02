import React, { useState, useEffect } from 'react'

import { Progress } from 'semantic-ui-react'
import { Iframe, ContainerVideo } from './styles'

function Play() {
    const [loading, setLoading] = useState(0)
    const [playing, setPlaying] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(loading + 1);
    //     }, 330)
    //     if (loading === 100) {
    //         setPlaying(true)
    //         setLoading(0)
    //     }
    // });

    return (
        <ContainerVideo>
            {playing ? (
                <Iframe src={`https://www.youtube.com/embed/UpFijg9XFOU?&autoplay=true`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen />
            ) : (
                    <section>
                        <p>Proximo:</p>
                        <span>IAGO BONTEMPO</span>
                        <Progress percent={loading} indicating />
                    </section>
                )}

        </ContainerVideo>
    )
}

export default Play
