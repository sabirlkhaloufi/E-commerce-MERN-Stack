import React from 'react' ;
import SectionTitle from '../title/SectionTitle';
import Category from './Category';

const SpecialiteCategory = () => {
  return (
    <div className="sercice-area eduvibe-service-four edu-section-gap bg-color-white pt-5">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "choisir votre specialite"
                            title = "les documents selon specialite"
                        />
                    </div>
                </div>

                <Category />

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-11-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-02-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-20.png" alt="Shape Thumb" />
                    </div>
            </div>
            </div>
        </div>
  )
}

export default SpecialiteCategory