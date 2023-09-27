import React, { useEffect, useState } from 'react';
import DonateCard from '../../components/Header/Donate/DonateCard';
import DonateDetail from '../DonateDetail/DonateDetail';

const Favorites = () => {
    const [donates, setDonates] = useState([])
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donates'));
        if(donationItems){
            setDonates(donationItems)
        }
        else{
            setNoFound('No Data Found')
        }
    },[])

    console.log(isShow);
    return (
        <div className=''>
            {
                noFound ? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> : <div>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-5 md:grid md:grid-cols-2 md:gap-5'>
                        {/* {donates?.map(element => <DonateCard key={element.id} element={element}></DonateCard>)} */}
                    </div>
                    <div className='grid grid-cols-2'>
                        {
                            isShow ? donates.map((element) => (<DonateCard key={element.id} element={element}></DonateCard>)) :
                            donates.slice(0,2).map((element) => (<DonateCard key={element} element={element}></DonateCard>))
                        }
                        
                    </div>
                    
                    {donates.length > 4 && <button onClick={() => setIsShow(!isShow)} className='px-5 bg-green-600 mb-6 h-10 font-semibold block mx-auto rounded-lg mt-5'>{isShow? 'See Less' : 'See More'}</button>}
                </div>

            }
        </div>
        
    );
};

export default Favorites;