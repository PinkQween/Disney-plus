import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './../components/ImageSlider'
import Viewers from './../components/Viewers'
import Movies from './../components/Movies'
import db from './../firebase'
import { onSnapshot, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(()=> {
    onSnapshot(collection(db, "Movies"), (snapshot) => {
      // console.log(snapshot)

      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc.data());
        return { id: doc.id, ...doc.data() }
      })

      dispatch(setMovies(tempMovies));
    })
  }, [])

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/assets/images/home-background.png') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`