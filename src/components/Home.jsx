
import bannerImg from '../assets/undraw_fashion_blogging_banner.png'
import Banner from '../assets/shared/Banner'

function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-[100px]' >
      <Banner
        bannerImg={bannerImg}
        heading={"Develop your skills without dilligence"}
        subheading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum inventore facilis repellendus,in quis hic molestias quia esse possimus fugit illum, facere atque expedita similique animi. Debitis, perspiciatis consectetur. Recusandae doloribus amet repellat, perspiciatis sint placeat quis, voluptatum culpa beatae minus quae! Ullam perspiciatis quaerat temporibus esse itaque necessitatibus. Aspernatur soluta impedit incidunt, possimus tempora aperiam!"}
        btn1={"Get Started" }
        btn2={"Get Discount" } />
    </div>
  )
}

export default Home
