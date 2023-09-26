import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const DonateDetail = () => {
    const [donation, setDonation] = useState()
    const {id} = useParams()
  
    const donate = useLoaderData()
    useEffect(() => {
        const viewDonation = donate?.find( donation => donation.id ===id)

        setDonation(viewDonation)
    },[id, donate]);
    console.log(donation)
    const{ image, text_color, background_color, title_color,title_name, description   } = donation || {}

    const handleAddToDonation =() => {
        const addedDonatetionArray = [];
        const donationItems = JSON.parse(localStorage.getItem('donates'))
        if(!donationItems){
            addedDonatetionArray.push(donation)
            localStorage.setItem('donates', JSON.stringify(addedDonatetionArray))
            swal("Donated!", "You donated successfully!", "success");

        }
        else{

            const isExist = donationItems.find(donate => donate.id === id)
           if(!isExist){
            addedDonatetionArray.push(...donationItems, donation);
            localStorage.setItem('donates', JSON.stringify(addedDonatetionArray));
            swal("Donated!", "You donated successfully!", "success");

           }
           else{
            swal("Already Added!", "No duplicate!", "error");
           }


            
        }
        
    }
    return (
        <div className='ml-24 flex justify-center items-center h-screen'>
             <div className="relative  flex flex-col mt-20 mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6   overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={image}
      alt="img-blur-shadow"
      layout=""
    />
  </div>
  <div className="">
    <button onClick={handleAddToDonation}
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     Donate $290
    </button>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title_name}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.
    </p>
  </div>
  
              </div>  
        {/* <DonateDetail donate={donate}></DonateDetail> */}
        </div>
    );
};

export default DonateDetail;