import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

export const Slider = ({index,setIndex,people}) => {
    
    return (
        <>
        <div className="slider-contents">
        {people.map((person,personIndex)=>{
          const{id,image,name,title,quote}=person;
          let position ="nextSlide";
          if(personIndex===index){
            position="activeSlide" ;
          }
          if(personIndex===index-1 || (index===0 && personIndex === people.length-1)){
              position="lastSlide";
          }
            return(  
                <div className={`slider-content ${position}`} key={id}>
                    <div className="slider-img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="slider-name">
                        <h3>{name}</h3>
                    </div>
                    <div className="slider-title">
                        <h4>{title}</h4>
                    </div>
                    <div className="slider-qoute">
                        <p>{quote}</p>
                    </div>
                </div>
            )
        })}
            <div className="navigator">
                <button className="prev" onClick={()=>{setIndex(index-1)}}><FiChevronLeft/></button>
                <button className="next"
                onClick={()=>{setIndex(index+1)}}
                ><FiChevronRight/></button>
            </div>
        </div> 
        </>
    )
}

