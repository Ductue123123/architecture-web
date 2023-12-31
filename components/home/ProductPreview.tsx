import { Grid } from '@chakra-ui/react'
import React from 'react'
import villaImg1 from "../../public/images/villa1.jpg"
import villaImg2 from "../../public/images/villa2.jpg"
import villaImg3 from "../../public/images/villa3.jpg"
import villaImg4 from "../../public/images/villa4.jpg"
import villaImg5 from "../../public/images/villa5.jpg"
import villaImg6 from "../../public/images/villa6.jpg"
import villaImg7 from "../../public/images/villa7.jpg"
import villaImg8 from "../../public/images/villa8.jpg"
import villaImg9 from "../../public/images/villa9.jpg"
import ProjectItem from '@/constants/ProjectItem'

const ProductPreview = () => {
  return (
    <Grid pt={["30px","30px","80px","80px"]} px={["10px","10px","80px","80px"]} pb={"40px"} flexWrap={"wrap"} alignContent={'flex-start'} 
      templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}>
      {productListDummy.map((product, i) => (
        <ProjectItem key={i} img={product.img}
          location={product.location}
          name={product.name}
          type={product.type}/>
      ))}
    </Grid>
  )
}

export default ProductPreview

export const productListDummy = [
  {name: "Cascade Villa", type: "Biệt thự", location: "Bàu Bàng, Bình Dương", img: villaImg1.src},
  {name: "X Villa", type: "Biệt thự", location: "Một khu đất nào đó đáp ứng đủ tiêu chuẩn tại Huế hoặc Đà Nẵng", img: villaImg2.src},
  {name: "LUONG SON VILLA", type: "Biệt thự", location: "Lương Sơn, Hòa Bình", img: villaImg3.src},
  {name: "REBECCA VILLA", type: "Biệt thự", location: "Đà Lạt, Lâm Đồng",img: villaImg4.src},
  {name: "Nhà Hướng Nội", type: "Biệt thự", location: "Tân Phú, Sài Gòn, Việt Nam", img: villaImg5.src},
  {name: "T.E.O Villa", type: "Biệt thự", location: "Thủ Dầu Một - Bình Dương", img: villaImg6.src},
  {name: "HA VILLA", type: "Biệt thự", location: "Long Biên, Hà Nội", img: villaImg7.src},
  {name: "Thai Son Villa", type: "Biệt thự", location: "Dương Kinh, Hải Phòng", img: villaImg8.src},
  {name: "BWILLA – Lời Thì Thầm Của Đá", type: "Biệt thự", location: "Cao Bằng", img: villaImg9.src},
]