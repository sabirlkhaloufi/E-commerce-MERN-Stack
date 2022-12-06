import React from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll';

const SectionTitle = ( { slogan, title, classes } ) => {
    return (
//         <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
//    <h2>Look what i am doing</h2>
// </AnimationOnScroll >
        // <div className={ `section-title ${ classes }` }>
        //     hhhh
        //     {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={ true }>
        //         <h2 className="title">{ title }</h2>
        //     </ScrollAnimation>
        //     <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={ true }>
        //         <p className="slogan">{ slogan }</p>
        //     </ScrollAnimation> */}
        // </div>
    
        <div className={`section-title ${ classes ? classes: '' }`}>
            <AnimationOnScroll 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <span className="pre-title" dangerouslySetInnerHTML={{__html: slogan}}></span>
            </AnimationOnScroll>
            
            <AnimationOnScroll 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <h3 className="title" dangerouslySetInnerHTML={{__html: title}}></h3>
            </AnimationOnScroll>
        </div>
    )
}
export default SectionTitle;