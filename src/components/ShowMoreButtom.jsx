const ShowMoreButtom = ({ onClick, isVisible }) => {
     if (!isVisible) return null
     return (
          <div className="flex justify-center  mt-6">
               <button
               onClick={onClick}
               className="text-center font-bold bg-neutral-veryDarkBlueBg text-neutral-white p-2 w-48 hover:bg-neutral-white hover:text-neutral-veryDarkBlueText hover:shadow-boxShadow border rounded shadow-sm focus:outline-none transition duration-300 ease-in-out"
               >
               Show More
               </button>
          </div>
     );
}

export default ShowMoreButtom;
