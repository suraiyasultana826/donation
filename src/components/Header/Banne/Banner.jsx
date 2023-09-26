
const Banner = () => {
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover ' style={{backgroundImage: 'url(../../../photos/clothing.png)'}}>
          <div className="flex justify-center items-center content-center pt-56">
           <div>
           <h1 className="font-extrabold text-4xl">I Grow By Helping People In Need</h1>
          
           <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-6 h-10 rounded-lg" />
           <button className="h-10 bg-red-500 text-white w-16 rounded-lg">Search</button>
           </div>
          </div>
            
        </div>
    );
};

export default Banner;