const ShowMoreButtom = ({ onClick, isVisible }) => {
     if (!isVisible) return null
     return (
          <section className="show-more-button">
               <button
               onClick={onClick}
               className="show-more-button__button"
               >
               Show More
               </button>
          </section>
     );
}

export default ShowMoreButtom;
