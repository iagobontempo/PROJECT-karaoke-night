import React, { useState, useEffect } from 'react'

import { Progress } from 'semantic-ui-react'
import { Iframe, ContainerVideo } from './styles'

function Play(props) {
    return (
        <ContainerVideo>
            {props.playing ? (
                <Iframe src={`https://www.youtube.com/embed/${props.youtubeId}?&autoplay=true`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen />
            ) : (
                    <section>
                        <p>Proximo:</p>
                        <span>IAGO BONTEMPO</span>
                        <Progress percent={props.loading} indicating />
                    </section>
                )}

        </ContainerVideo>
    )
}

export default Play
