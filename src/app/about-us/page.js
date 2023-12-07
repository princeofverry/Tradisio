import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#212759]">
      <div className="container mx-auto flex flex-col items-center flex-1">
        {/* konten 1 */}
        <div className='text-white w-full flex justify-start items-center pt-16 pl-1 sm:justify-start sm:items-start sm:flex-row flex-col'>
          <div className="w-1/3 mt-4">
            <Image
              src="/pesonaJawa2.png"
              className='w-auto h-auto'
              alt="..."
              layout="responsive" // Membuat gambar responsif
              width={250}
              height={450}
            />
          </div>
          <div className="w-2/3">
            <div className="max-w-[800px] mx-auto text-start flex flex-col justify-start">
              <p className="text-white md:text-5xl sm:text-6xl text-4xl mt-6 font-bold sm:text-left text-center">
                ABOUT US.
              </p>
              <h1 className="md:text-base italic text-2xl md:py-6 text-justify mr-8 py-4">
                Sinau.com adalah Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec hendrerit turpis, eu porta metus.
                Ut tempus interdum sagittis. Nunc viverra, dolor vel gravida
                congue, elit lacus pellentesque mi, id rhoncus sem velit vel
                enim. Nullam tincidunt, elit eu suscipit facilisis, orci mauris
                sodales tortor, nec venenatis turpis lacus eget ligula. Aenean
                varius est non ipsum facilisis, vel eleifend augue sodales. In
                hac habitasse platea dictumst. Sed vel enim sit amet justo
                auctor fringilla. In hac habitasse platea dictumst. Sed vel
                justo vel neque feugiat efficitur vel ac sem. Nulla facilisi.
                Curabitur congue, elit id venenatis tincidunt, quam velit mattis
                erat, vitae feugiat elit risus ut metus.
              </h1>
            </div>
          </div>
        </div>
        {/* konten 2 */}
        <div className='text-white w-full flex justify-center pt-12 pr-10'>
          <div>
            <img
              src='/pesonaJawa1.png'
              className='w-auto h-auto'
            />
          </div>
        </div>
        {/* konten 3 */}
        <div className="text-white w-full flex justify-start items-start pt-8 flex items-center sm:justify-start sm:items-start sm:flex-row flex-col">
          <div className="w-1/2">
            <div className="max-w-[800px] mx-auto text-start flex flex-col justify-start">
              <p className="text-white md:text-4xl sm:text-6xl text-4xl font-bold md:pt-32 md:pb-0 ml-12">
                "
              </p>
              <h1 className="md:text-2xl text-2xl font-bold md:py-0 text-justify mr-24 ml-16">
                Ampun dados tiyang ingkang rumaos saged. Ananging dados tiyang
                ingkang saged rumaos.
              </h1>
              <h2 className="text-white md:text-4xl sm:text-6xl text-4xl font-bold pt-0 text-right mr-20">
                "
              </h2>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/pesonaJawa4.png"
              className="w-auto h-auto pr-11"
              alt="..."
              layout="responsive" // Membuat gambar responsif
              width={250}
              height={450}
            />
          </div>
        </div>
        {/* konten 4*/}
        <div className="text-white w-full flex justify-start items-start pt-16 pl-1 pb-12">
        <div className="w-1/2">
            <Image
              src="/pesonaJawa2.png"
              className="w-auto h-auto"
              alt="..."
              layout="responsive" // Membuat gambar responsif
              width={250}
              height={450}
            />
          </div>
          <div className="w-1/2">
            <div className="max-w-[800px] mx-auto text-start flex flex-col justify-start">
              <p className="text-white md:text-5xl sm:text-6xl text-4xl font-bold md:pt-4 pl-4 md:pb-0">
                ABOUT US
              </p>
              <h1 className="md:text-base md:italic text-2xl md:py-6 text-justify mr-16 pl-4">
                Sinau.com adalah Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec hendrerit turpis, eu porta metus. Ut tempus interdum sagittis. 
                Nunc viverra, dolor vel gravida congue, elit lacus pellentesque mi, id rhoncus sem velit vel enim. 
                Nullam tincidunt, elit eu suscipit facilisis, orci mauris sodales tortor, nec venenatis turpis lacus 
                eget ligula. Aenean varius est non ipsum facilisis, vel eleifend augue sodales. In hac habitasse platea 
                dictumst. Sed vel enim sit amet justo auctor fringilla. In hac habitasse platea dictumst. Sed vel justo vel
                neque feugiat efficitur vel ac sem. Nulla facilisi. Curabitur congue, elit id venenatis tincidunt, quam velit
                mattis erat, vitae feugiat elit risus ut metus. Ampun dados tiyang ingkang rumaos saged. Ananging dados tiyang
                ingkang saged rumaos.
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;