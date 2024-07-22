import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" URL={requests.requestUpcoming} />
      <Row title="Popular" URL={requests.requestPopular} />
      <Row title="Trending" URL={requests.requestTrending} />
      <Row title="Top Rated" URL={requests.requestTopRated} />
      <Row title="Horror" URL={requests.requestHorror} />
    </>
  )
}

export default Home
