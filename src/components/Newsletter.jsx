import UndrawFeeling from '../assets/undraw_feeling.png'
import Banner from '../assets/shared/Banner'

function Newsletter() {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
          <Banner bannerImg={UndrawFeeling}
              heading={"Each student an share their discount code for friends"}
              subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"}
              btn1={"I have code"} btn2={"Get it now!"} />
    </div>
  )
}

export default Newsletter
