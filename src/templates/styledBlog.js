import styled from 'styled-components';
import { Container } from 'reactstrap';

export const BannerBlog = styled.div`
    background-image: url('${props => props.src}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 500px;
    width: 100%;
`

export const ContainerBlog = styled(Container)`
    h1 {
        font-family: 'Bebas Neue', sans-serif;
        margin-bottom: 16px;
        margin-top: 32px;
        font-size: 62px;
        color: #222222;
    }

    h2 {
        font-family: 'Bebas Neue', sans-serif;
        margin-bottom: 16px;
        margin-top: 32px;
        color: #222222;
        font-size: 42px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        color: #363636;
        line-height: 24px;
        font-size: 18px;
    }
`;