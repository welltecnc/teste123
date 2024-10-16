import styled from "styled-components";

export const SlideshowRespStyle = styled.header`

.slideshow {
    display: none;
    margin-top: -40px;
    z-index:-1;
    background-color:black;
    height: 100vh;
    width:100%;
}

.slideshow img {
    width: 100%;
}

.animated {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}
@media (max-width:800px) {
    .slideshow{
        display: block;
    }
}
`
