/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const DonateCard = ({element}) => {
  const{id, image, text_color, background_color, title_color,title_name, description   } = element || {}
    return (
        <div>
         <Link to={`/donate/${id}`}>
         <div  classNameName="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
  <div classNameName="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title_name}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {description}
    </p>
  </div>
 
</div></Link>
        </div>
    );
};

export default DonateCard;