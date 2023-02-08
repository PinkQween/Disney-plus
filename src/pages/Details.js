import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';
import { doc, getDoc } from "firebase/firestore";

function Details() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState();

    console.log(id)

    useEffect(() => {
        db.collection("Movies").doc(id).get().then(async (doc) => {
            if (doc.exists) {
                setMovie(doc.data());
            } else {
                console.log("no such document in firebase 🔥");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [id])

    console.log(movie)

    return (
        <Container>
            {movie &&
                <>
                    <Background>
                        <img src={movie.backgroundImg} />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src='/assets/images/play-icon-black.png' />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src='/assets/images/play-icon-white.png' />
                            <span>TRAILER</span>                
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src='/assets/images/group-icon.png' />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>
            }
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 6px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.4px;
    cursor: pointer;

    &:hover {
        background-color: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 32px;
        color: white;
    }

    &:hover {
        background-color: rgb(198, 198, 198);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: black;
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 650px;
`