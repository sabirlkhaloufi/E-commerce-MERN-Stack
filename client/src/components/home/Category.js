import React from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

const items = [
    {
        title: 'Human Reasearch',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '23 Courses',
        icon: 'icon-student-read',
        link: '#'
    },
    {
        title: 'Web Development',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '39 Courses',
        icon: 'icon-lab',
        link: '#'
    },
    {
        title: 'Mathmatical Physics',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '+ 45 Courses',
        icon: 'icon-compass',
        link: '#'
    },
    {
        title: 'Number Theory',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Number Theory',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Number Theory',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Number Theory',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Number Theory',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Data Sciences',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '25 Courses',
        icon: 'icon-microscopes',
        link: '#'
    },
    {
        title: 'Web Development',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '18 Courses',
        icon: 'icon-calculator',
        link: '#'
    },
    {
        title: 'Art & Design',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '15 Courses',
        icon: 'icon-pen-tool',
        link: '#'
    },
    {
        title: 'Nuclear Power',
        info: 'Lore Ipsum a simply dummy text of the printing.',
        numberOfCourses: '30 Courses',
        icon: 'icon-science',
        link: '#'
    }
];

const CategoryJami3a = ( { wrapperClass, styleClass } ) => {
    return (
        <div className={ `row ${ wrapperClass || 'g-5 mt--25' }` }>
            { items.map( ( data , i ) => (
                <AnimationOnScroll 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ `col-lg-3 col-md-6 col-sm-6 col-12 ${ styleClass ? styleClass : '' }` }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className="service-card service-card-4">
                        <div className="inner">
                            <div className="icon">
                                <i className={ data.icon }></i>
                                {/* <span className="subtitle">{ data.numberOfCourses }</span> */}
                            </div>
                            <div className="content">
                                <h6 className="title"><Link to={ data.link } className=" text-decoration-none">{ data.title }</Link></h6>
                                <p className="description">{ data.info }</p>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            ) ) }
        </div>
    )
}

export default CategoryJami3a;