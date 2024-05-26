import img1 from  './images/img1.webp'

import Global_Comp from './Global-component';
import cdc from './images/globalconnect/cdc.jpg';
import fiu from './images/globalconnect/fiu.jpg';
import umsl from './images/globalconnect/umsl.jpg'

function Global()
{
    return <div>
        <div className="background-image">
            <div className="title">
            <h1 >Global Connect</h1></div>

        </div>
        <div className="header">
            <Global_Comp img={umsl} title="UMSL PARTNERSHIP" content="Park Global is in collaboration with the University of Missouri-St. Louis (UMSL), which has been ranked 8th in the United States by US News & World Report. The collaborative arrangement paves way for intense faculty and student interaction between UMSL and Park Global, in addition to an optional MBA from UMSL & paid internship." ></Global_Comp>
            <Global_Comp img={fiu} title="FIU COLLABORATION" content="In pursuit of giving the best alternatives to its students, Park Global has signed an MoU with Florida International University (FIU), Miami, USA offering MIB, MS in Finance, MS in Human Resources Management, MS in Management Information Systems, MS in International Real Estate, MS in Taxation, and International MBA. The MoU also paves way for Park Global students to enroll in FIU’s Graduate Certificate programs in International Business, Finance, HR Management, MIS, Banking, Real Estate, and Taxation."></Global_Comp>
            <Global_Comp img={cdc} title=" news
CDC COLLABORATION" content="Consultancy Development Centre (CDC) is an Autonomous organization of Department of Scientific & Industrial research (DSIR), Ministry of Science and Technology, Government of India set up for promotion, development and strengthening of consultancy skills and capabilities in the country including enhancement of export of consultancy and professional services. CDC and Park Global have signed an MoU to offer CDC’s MS programme in Consultancy Management at Chennai. It is noteworthy to mention that CDC has signed only four such MoUs throughout the nation so far."></Global_Comp>

        </div>
        
    </div>
}
export default Global;