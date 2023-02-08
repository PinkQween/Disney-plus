import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { auth, provider } from './../firebase'

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userName = useSelector(selectUserName);
    // const userEmail = userSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));

                navigate('/')
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithRedirect(provider).then((result) => {
            console.log(result);
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));

            navigate('/')
        }).catch((error) => {
            console.error(error);
        });
    };

    const signOut = () => {
        auth.signOut().then(() => {
            navigate('/login')
        }).catch((error) => {
            console.error(error);
            dispatch(setSignOut)
        });
    };

    return (
        <Nav>
            {/* <Link to="/"> */}
                <Logo src="/assets/images/logo.svg" />
                {!userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                    </LoginContainer> ): <>
                        <NavMenu>
                            <Link to="/">
                                <img src="/assets/images/home-icon.svg" />
                                <span>HOME</span>
                            </Link>
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
                        <ProfileIcon onClick={signOut} src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70D1C2E35B62D55C4C917AF30957AF9BE8D60FC2089B90C131B275E86EFD0553/scale?width=280&aspectRatio=1.00&format=png" />
                    </>
                }
            {/* </Link> */}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    flex: 1;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after {
                background: white;
                content: "";
                height: 2px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
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

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 14px;
    border-radius: 6px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.4s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`