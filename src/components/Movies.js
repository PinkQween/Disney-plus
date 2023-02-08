import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {
    const movies = useSelector(selectMovies);

    console.log(movies)

    return (
        <Container>
            <h4>Recomened For You:</h4>
            <Content>
                {movies &&
                movies.map((movie) => (
                    <Wrap key={movie.id}>
                        {/* {movie.id} */}
                        {/* <Link to={`/details/` + movie.title.replace(/\s+/g, '-').toLowerCase()}> */}
                        <Link to={`/details/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    margin-top: 80px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
    }
`