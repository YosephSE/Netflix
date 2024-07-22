import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title="Up Coming" URL={requests.requestUpcoming} />
      <Row rowID='2' title="Popular" URL={requests.requestPopular} />
      <Row rowID='3' title="Trending" URL={requests.requestTrending} />
      <Row rowID='4' title="Top Rated" URL={requests.requestTopRated} />
      <Row rowID='5' title="Horror" URL={requests.requestHorror} />
    </>
  )
}
  
export default Home
