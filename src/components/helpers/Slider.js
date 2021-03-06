import React from 'react'
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    padding-top: 350px;
    align-self: flex-end;
`

const move = keyframes`
    from {
        left: -200%;
    }
    to {
        left: 200%;
    }
`
const Slide = styled.div`
    padding-right: 100px;
    position: relative;
    overflow-x: hidden;
    animation: ${move} 10s linear infinite;
` 

export default function Slider(props) {
    let count = 0;
    return (
        <Container>
            {props.slides.map((slide) => (
                <Slide>
                    {slide}
                </Slide>

            ))}
        </Container>
    )
}