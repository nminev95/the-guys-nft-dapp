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
import InfiniteSlider from '@components/InfiniteSlider/InfiniteSlider'
import MintBox from '@components/MintBox/MintBox'

const Home = () => {
  return (
    <Page className="Home">
      <InfiniteSlider speed={100} direction="right">
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img1}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img3}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img2}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img4}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img5}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img6}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img7}
          boxSize="200px  "
        />
      </InfiniteSlider>
      <InfiniteSlider speed={100} direction="left">
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img1}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img2}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img3}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img4}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img5}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img6}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img7}
          boxSize="200px  "
        />
      </InfiniteSlider>
      <InfiniteSlider speed={100} direction="right">
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img1}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img2}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img3}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img4}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img5}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img6}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img7}
          boxSize="200px  "
        />
      </InfiniteSlider>
      <InfiniteSlider speed={100} direction="left">
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img1}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img2}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img3}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img4}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img5}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img6}
          boxSize="200px  "
        />
        <Image
          border="1px"
          borderStyle="solid"
          borderColor="teal.700"
          borderRadius="3xl"
          p={2}
          src={img7}
          boxSize="200px  "
        />
      </InfiniteSlider>
      <MintBox />
    </Page>
  )
}

export default Home
