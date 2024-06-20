import './SectionsCard.css';
import play from "../../assets/play.png";
import star from "../../assets/star.png";
// eslint-disable-next-line react/prop-types
const SectionsCard = ({ image, title, description, width, height, isMiddleCard, hasBorder , lessonsNum , rating}) => {
  return (
    <div
    className={`card ${isMiddleCard ? 'middle-card' : ''} ${hasBorder ? 'with-border' : 'no-border'}`}
    style={{ width, height }}
    >
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
       { lessonsNum ? 
       <div className='CourseInfo' >      
        <div className='LessonsNum' >      
           <img src={play} className='playImg'/>
           <p>{lessonsNum}</p>
         </div>  
         <div className='lessonRate' >      
           <p>{rating}</p>
           <div className='starCircle'>
        <img src={star} className='starImg'/>
           </div>
         </div>    
        </div>        
    : null
    }
        </div>
    </div>
  );
};

export default SectionsCard;
