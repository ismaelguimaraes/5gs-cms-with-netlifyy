import styled from 'styled-components';

export const Navbar = styled.header`
    height: 76px;
    width: 100%;
    background-color: #000000;
`

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    padding: 0 1.0875rem 0 1.0875rem;
`

export const ToggleNavbar = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    outline: 0;

    display: flex;
    width: 22px;
    height: 16px;
    flex-direction: column;
    justify-content: space-between;

    span {
        display: block;
        position: relative;
        width: 100%;
        height: 2px;
        background-color: #FFFFFF;
    }

    @media(min-width: 992px) {
        display: none;
    }
`

export const Nav = styled.nav`
    display: none;
    @media (min-width: 992px) {
        ul {
            list-style: none;
            display: flex;
            margin: 0;

            li {
                margin: 0;

                a {
                    font-family: 'Open Sans', sans-serif;
                    color: #FFFFFF;
                    text-decoration: none;
                }

                & + li {
                    margin-left: 16px;
                }
            }
        }
    }
    
`