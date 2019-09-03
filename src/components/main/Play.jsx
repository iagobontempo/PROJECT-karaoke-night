import React from 'react'

import { Progress } from 'semantic-ui-react'
import { Iframe, ContainerVideo } from './styles'

function Play(props) {

    // useEffect(() => {
    //     ReactDOM.unmountComponentAtNode();
    // }, [])

    // function removeElementsByClass(className) {
    //     var elements = document.getElementsByClassName(className);
    //     while (elements.length > 0) {
    //         elements[0].parentNode.removeChild(elements[0]);
    //     }
    // }

    return (
        <ContainerVideo>
            {props.playing ? (
                <Iframe src={`https://www.youtube.com/embed/${props.youtubeId}?&autoplay=true&showinfo=0&controls=0&iv_load_policy=3&rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen />
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
