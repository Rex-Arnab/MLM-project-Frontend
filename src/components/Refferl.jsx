import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
    FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from "react-share";
import "../App.css";

function Refferl() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [copied, setCopied] = useState(false);
    const shareUrl = user.referralCode; // TODO: Give Your Personalised URL To Share

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 font-weight-bold">
                        <h4>Total Referrel Count: {user.referralCount}</h4>
                    </div>
                </div>
                <div className="row  mb-3">
                    <div className="col-md-12">
                        <div className="refferl-link">
                            <input type="text" defaultValue={ shareUrl } disabled className="mb-1"/>
                            <CopyToClipboard
                                text={shareUrl}
                                onCopy={() => setCopied(true)}
                            >
                                <button className="btn btn-primary">
                                    {copied ? "Copied": "Copy Link"}
                                </button>
                            </CopyToClipboard>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="refferl-share">
                            <FacebookShareButton
                                url={shareUrl}
                                quote="Share Your Referral Link"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//             <div>
//                     <h3>
//                         <b>
                            
//                         </b>
//                     </h3>
//                 <h5>
//                     Your Referral Link: 
//                     <span>
//                         <input
//                             type="text"
//                             defaultValue={user.referralCode}
//                             className="form-control"
//                         />
//                         <CopyToClipboard
//                             text={user.referralCode}
//                             onCopy={() => setCopied(true)}
//                         >
//                             <button>Copy</button>
//                         </CopyToClipboard>
//                         {copied ? (
//                             <span style={{ color: "red" }}>Copid</span>
//                         ) : null}
//                     </span>
//                 </h5>
//             </div>

//             <div
//                 style={{
//                     background: "#fff",
//                     height: "100vh",
//                     width: "100%",
//                 }}
//             >
//                 <h3 className="px-5">Share Now:</h3>
//                 <div className="d-flex px-5 py-3 mx-5 flex-row">
//                     <FacebookShareButton
//                         url={shareUrl}
//                         quote={"Your friend wants to share MLM refferl link."}
//                         hashtag={"#MLM4Life"}
//                     >
//                         <FacebookIcon size={40} round={true} />
//                         &nbsp;
//                     </FacebookShareButton>

//                     <WhatsappShareButton
//                         url={shareUrl}
//                         quote={"Your friend wants to share MLM refferl link."}
//                         hashtag={"#MLM4Life"}
//                     >
//                         <WhatsappIcon size={40} round={true} />
//                         &nbsp;
//                     </WhatsappShareButton>

//                     <LinkedinShareButton
//                         url={shareUrl}
//                         quote={"Your friend wants to share MLM refferl link."}
//                         hashtag={"#MLM4Life"}
//                     >
//                         <LinkedinIcon size={40} round={true} />
//                         &nbsp;
//                     </LinkedinShareButton>

//                     <TwitterShareButton
//                         url={shareUrl}
//                         quote={"Your friend wants to share MLM refferl link."}
//                         hashtag={"#MLM4Life"}
//                     >
//                         <TwitterIcon size={40} round={true} />
//                         &nbsp;
//                     </TwitterShareButton>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Refferl;
