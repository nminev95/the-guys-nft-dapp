import { Box, Flex, Image } from '@chakra-ui/react'
import Page from '@components/common/Page/Page'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'
import img7 from '../../assets/images/7.jpg'

import { useEffect, useRef, useState } from 'react'
import InfiniteLooper from '@components/Footer/test'
import InfiniteSlider from '@components/InfiniteSlider/InfiniteSlider'

const Home = () => {
  return (
    <Page className="Home">
      <InfiniteSlider speed={20} direction="right">
        <Image src={img1} boxSize="200px  " />
        <Image src={img2} boxSize="200px  " />
        <Image src={img3} boxSize="200px  " />
        <Image src={img4} boxSize="200px  " />
        <Image src={img5} boxSize="200px  " />
        <Image src={img6} boxSize="200px  " />
        <Image src={img7} boxSize="200px  " />
      </InfiniteSlider>
      <InfiniteSlider speed={20} direction="left">
        <Image src={img1} boxSize="200px  " />
        <Image src={img2} boxSize="200px  " />
        <Image src={img3} boxSize="200px  " />
        <Image src={img4} boxSize="200px  " />
        <Image src={img5} boxSize="200px  " />
        <Image src={img6} boxSize="200px  " />
        <Image src={img7} boxSize="200px  " />
      </InfiniteSlider>
      <InfiniteSlider speed={20} direction="right">
        <Image src={img1} boxSize="200px  " />
        <Image src={img2} boxSize="200px  " />
        <Image src={img3} boxSize="200px  " />
        <Image src={img4} boxSize="200px  " />
        <Image src={img5} boxSize="200px  " />
        <Image src={img6} boxSize="200px  " />
        <Image src={img7} boxSize="200px  " />
      </InfiniteSlider>
      <InfiniteSlider speed={20} direction="left">
        <Image src={img1} boxSize="200px  " />
        <Image src={img2} boxSize="200px  " />
        <Image src={img3} boxSize="200px  " />
        <Image src={img4} boxSize="200px  " />
        <Image src={img5} boxSize="200px  " />
        <Image src={img6} boxSize="200px  " />
        <Image src={img7} boxSize="200px  " />
      </InfiniteSlider>
      <Box position="absolute" top="50%" left="50%" background="black">
        HERE MINT
      </Box>
    </Page>
  )
}

export default Home
