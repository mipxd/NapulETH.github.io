import { RibbonContainer, Ribbon } from "react-ribbons";
import dynamic from 'next/dynamic'

function DynamicRibbon(){
    return(
        <RibbonContainer>
                        <Ribbon
                            side="left"
                            type="corner"
                            size="normal"
                            backgroundColor="#EDDB55"
                            color="#000000"
                            fontFamily="Poppins"
                            withStripes={true}
                        >
                            <span className="text-black Medium ">Soon</span>
                        </Ribbon>
                        <div className="min-w-[75vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-[19vw] h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AB] buttonShadow ">


                        <h5 className=" text-black Medium text-2xl">Book Your Trip</h5>
                    </div>
                    </RibbonContainer>
    )
}

export default DynamicRibbon