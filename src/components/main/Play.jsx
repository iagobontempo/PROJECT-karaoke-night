import React from 'react'

import { Iframe, ContainerVideo } from './styles'

function Play(props) {

    return (
        <ContainerVideo>
            {props.playing ? (
                <Iframe src={`https://www.youtube.com/embed/${props.youtubeId}?&autoplay=true&showinfo=0&controls=0&iv_load_policy=3&rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen />
            ) : (
                    <section className='neon'>
                        <span>{props.author} está cantando</span>
                    </section>
                )}
        </ContainerVideo>
    )
}

export default Play
