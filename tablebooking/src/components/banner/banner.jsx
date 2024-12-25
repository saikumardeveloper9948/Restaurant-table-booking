import image4 from "../../assets/2.png"

const Banner = () => {
  return (
   <>
     <div className='container py-14'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* image section */}
            <div className="flex justify-center items-center">
                <img src={image4} alt="image" />
            </div>
            {/* text section */}
            <div className="py-4 px-4 flex flex-col justify-center">
                <h1 className="text-4xl font-semibold text-gray-800">Food Is Always Good</h1>
                <p className="py-4 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic culpa quam similique mollitia alias</p>
            </div>
        </div>
     </div>
   </>
  )
}

export default Banner