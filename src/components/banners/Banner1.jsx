import sat1 from "../../assets/satelite1.jpg";


const Banner1 = () => {
  return (
    <>
    <section className='bg-black text-white pb-12'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 ">
                <img data-aos="zoom-in" data-aos-delay="300" src={sat1} alt="" 
                className='w-full sm:w-4/5 object-cover '/>
                <div data-aos="fade-up" data-aos-delay="500" className='space-y-4 border-r-2 border-b-2 p-4 border-sky-700  '>
                    <p className='text-sky-700'>Our Mission</p>
                    <h1 className='text-5xl'>James Web</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt
                    </p>
                    <button className='primaryButton'>Learn More</button>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Banner1