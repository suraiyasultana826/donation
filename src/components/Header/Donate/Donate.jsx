import DonateCard from "./DonateCard";

const Donate = ({donate}) => {
    // console.log(typeof donate)
    return (
        <div>
            <h1 className='text-2xl text-center py-10'>Donate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {
               
                donate && donate?.map((element, index) => <DonateCard key = {index} element={element}> </DonateCard> )

                }
            </div>
        </div>
    );
};

export default Donate;