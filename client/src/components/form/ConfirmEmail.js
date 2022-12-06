import React, { useEffect , useState  } from "react";
import { useParams , Link} from "react-router-dom";
import { verifyUserByToken } from "../../utils/requests";
import NotFoundPage from "../../pages/NotFoundPage";

const ConfirmEmail = () => {
    const token = useParams().token;
    const [error, setError] = useState(null);
    useEffect(() => {
        
        async function verifyUser() {
            try {
                await verifyUserByToken(token);
                setError(false);
            } catch (error) {
                setError(true);
            }
        }
        verifyUser();
        
        
      },[]);
     if (error === false) {
        
      return (
          <div className="edu-error-area eduvibe-404-page edu-error-style pt-1">
      <div className="container eduvibe-animated-shape">
        <div className="row g-5">
            <div className="col-lg-12">
                <div className="content text-center">
                    {/* <div className="thumbnail mb--60">
                        <img src="/images/others/4.png" alt="404 Images" />
                    </div> */}
                    <h3 className="title text-success">Account Verified Successfully</h3>
                    <p className="description">You can now login to your account.</p>
                    <div className="backto-home-btn">
                    <Link to="/login-register/login" className="edu-btn text-decoration-none">Back To Login<i className="icon-arrow-right-line-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div className="shape-image shape-image-1">
                <img src="/images/shapes/shape-11-06.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-09-02.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-05-06.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-4">
                <img src="/images/shapes/shape-14-03.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-5">
                <img src="/images/shapes/shape-03-10.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-6">
                <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
            </div>
        </div>
      </div>
    </div>
  )}
  if (error) return <NotFoundPage />
}

export default ConfirmEmail