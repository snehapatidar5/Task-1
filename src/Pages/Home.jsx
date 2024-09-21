// import Estimate from "./Estimate"
// import Hero from "./Hero"
// import Cards from './Cards'
// import Video from './Video'
// import Benefit from './Benefit'
// import Questions from './Questions'
// import Slider from './Slider'

import Estimate from '../Component/OtherComponents/Estimate.jsx'
import Hero from '../Component/OtherComponents/Hero.jsx'
import Cards from '../Component/OtherComponents/Cards.jsx'
import Video from '../Component/OtherComponents/Video.jsx'
import Benefit from '../Component/OtherComponents/Benefit.jsx'
import Slider from '../Component/OtherComponents/Slider.jsx'
import Questions from '../Component/OtherComponents/Questions.jsx'




function Home() {
  return (
    <>
      <Hero />
      <Estimate />
      <Cards />
      <Video />
      <Benefit />
      <Slider />
      <Questions />
    </>
  )
}

export default Home