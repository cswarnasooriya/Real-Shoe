import { FaGooglePlusG } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <Footer>
        <section>
            <div>
                <div>
                    <a href="">
                        <img src="/logo-black.png" alt="main logo" />

                    </a>
                    <div>
                        <FaGooglePlusG/>
                        <CiFacebook/>
                        <FaXTwitter/>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Company</h4>
                            <ul>
                                <li>Home</li>
                                <li>Features</li>
                                <li>Screenshots</li>
                                <li>Pricing</li>
                            </ul>
                        
                    </div>
                </div>
            </div>
        </section>
      
    </Footer>
  )
}

export default Footer
