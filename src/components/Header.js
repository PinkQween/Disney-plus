import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/assets/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="/assets/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/assets/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/assets/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/assets/images/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/assets/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/assets/images/series-icon.svg" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <ProfileIcon src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70D1C2E35B62D55C4C917AF30957AF9BE8D60FC2089B90C131B275E86EFD0553/scale?width=280&aspectRatio=1.00&format=png" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b2d;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        align-items: center;
        
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                left: 3px;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(1, 0.69, 0.25, 1.5) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const ProfileIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`