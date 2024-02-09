import { RibbonContainer, Ribbon } from "react-ribbons";
import dynamic from 'next/dynamic'
import { useTranslation } from "react-i18next";

function DynamicRibbon(){

    const { t, i18n } = useTranslation();

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
                            <span className="text-black Medium ">
                                {t('soon')}
                            </span>
                        </Ribbon>
                        <div className="min-w-[75vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-[19vw] h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AB] border-2 border-[#eddb55] ">


                        <h5 className=" text-black Medium text-xl whitespace-nowrap">
                            {t('book')}
                        </h5>
                    </div>
                    </RibbonContainer>
    )
}

export default DynamicRibbon