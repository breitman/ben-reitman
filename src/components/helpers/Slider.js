import React from 'react'
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin-top: 35%;
`

const move = keyframes`
    from {
        left: -110%;
    }
    to {
        left: 110%;
    }
`
const Slide = styled.div`
    padding-right: 100px;
    position: relative;
    overflow-x: hidden;
    animation: ${move} 10s linear infinite;
`


const move2 = keyframes`
    from {
        left: -1000%;
    }
    to {
        left: 100%;
    }
`
const Slide2 = styled.div`
    position: relative;
    overflow-x: hidden;
    padding: 0px 20px 0px 20px;
    animation: ${move2} 10s linear infinite;
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