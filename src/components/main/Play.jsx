import React from 'react'

import { Iframe, ContainerVideo, QrCode } from './styles'
import { Divider } from 'semantic-ui-react'

function Play(props) {

    return (
        <ContainerVideo>
            {props.playing ? (
                <Iframe src={`https://www.youtube.com/embed/${props.youtubeId}?&autoplay=true&showinfo=0&controls=0&iv_load_policy=3&rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen />
            ) : (
                    <section className='neon'>
                        <QrCode src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://karaoke-night.web.app/${props.place}`} alt="QRCODE" />
                        <Divider hidden />
                        <span>Senha: {props.pass}</span>
                    </section>
                )}
        </ContainerVideo>
    )
}

export default Play
