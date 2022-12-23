export default function Privacy(){
    const privacy=[
        {title:'Last Updated: March 2022', Dis:"This site is one of a family of websites, mobile apps, and other digital tools (Digital Tools) operated by various ministries related to Campus Crusade for Christ (Cru) and governed by this Privacy Statement. Where we use the terms “we” “us” or “our,” we refer to Campus Crusade for Christ International and affiliated ministries (our Organization).We are committed to protecting and appropriately handling private and personal information and take your privacy very seriously. We are publishing this Privacy Statement to let you know how we collect, process, use and share your personal information.The definition of “personal information” will differ depending upon applicable law. In Europe it will include all information that directly or indirectly relates to you, and includes “personal data” as defined by the General Data Protection Regulation (GDPR). Where GDPR or other EU privacy laws apply to you, this Privacy Statement details how you can exercise your rights. We may, from time-to-time, update this Privacy Statement, so we encourage you to review it periodically. We will notify you (by email or prominent notice on this site) about changes in the way we treat your personal information and how those changes are likely to impact you."}
    ,{title:'1. Using our Digital Tools.',Dis:'Please read our Terms of Use to find out more about the requirements for using our Digital Tools. Please note that individual applications are governed by terms of use customized for that specific application.'},
    {title:'2. How we use your personal information.', Dis:'We will generally only collect and use your personal information when it is necessary to achieve our legitimate interests of fostering spiritual growth, which includes providing spiritual guidance, coaching, events, meetings, and Digital Tools. We may also use your personal information when it is needed to provide you with goods or services, or to process donations or to comply with our legal obligations.'}
,
{title:'3. How we collect personal information.',Dis:'We obtain personal information about you via:direct interactions: when you enquire about our activities, engage in an activity with us, make a donation, register through one of our sites or at an event, or otherwise give us your personal information. If you meet with us for discipleship or spiritual advice, we may take confidential notes for spiritual guidance and support. If you prefer that we do not take notes, please let us know. The information you disclose is entirely at your discretion.cookies and other automated technologies: when you interact with our Digital Tools, we may use cookies and similar technologies to track activities (for more information, see “Cookies and Information Collected by Technology” below). We also track usage of mobile apps through analytics.third parties [or other publicly available sources]: we may from time to time obtain personal information about you from third parties [and public sources] (e.g. US Census Data). We will only collect personal information from third parties if they have obtained that information in a legal and proper way.Referral of information by individuals. Your name and contact details may have been passed to us by someone you know, who indicated that you might be interested in hearing about our ministry, according to the chart in section 2.'}    
,
{title:'4. Types of personal information that we collect.',Dis:'We collect the following types of personal information: application data including employment history, qualifications and references, if applicable; contact details including email address, postal address, email, telephone number and instant messaging details; demographics including information that allows us to better understand who you are and the services in which you are most interested; financial data including bank account and payment bank details; financial transaction data including details about payments and donations from you and details of products and services you have purchased from us and activities you have participated in; historical transaction data including communication history, your past donations, purchases, applications and interactions with us; identity data including name, date of birth, gender, marital status; information about beliefs and circumstances including religious information; information you disclose about your personal circumstances; location data that is information about your physical location, including IP address, and lat/long coordinates and country of origin (where applicable); marketing and communication data including your preferences in receiving marketing from us and communication preferences; requests and preferences including communication preferences, your interests and prayer requests; security credentials including username and password; system data including information about how you use our Digital Tools; tax status; and travel information including your travel details, delegate information, dietary requirements, and room preferences.'}
,
{title:'5. How/when we disclose personal information.',Dis:'Generally, we will not disclose or share your personal information (including your email address) with anyone outside our organization without your permission. However, we may need to use or share your information with our partners and agents who provide goods and services to you on our behalf. Your information may be disclosed: to other parts of our Organization; to public or regulatory authorities; to third party service providers, including: cloud service providers for the hosting of apps and sites; direct and email marketing service providers (e.g. MailChimp); and companies that assist us in processing your donations. We take steps to safeguard your information and we have contractual provisions requiring all third party service providers to respect the security of your personal data and to treat it in accordance with our data protection policies and all applicable laws. We will not allow third party service providers to use your personal information for their own purposes and they will only be allowed to process your personal information in accordance with our instructions.'}
,
{title:'7. International transfer of your personal information.',Dis:'We are an international organisation and we might need to transfer your personal information to other countries. If you are in the European Economic Area (EEA), please be aware that we may need to transfer your data to countries outside the EEA to process it. We will only transfer your personal information outside the EEA with adequate safeguards in place and in full compliance with applicable laws. For example, we will only transfer your personal information to countries that have been deemed to provide an adequate level of protection. We have established standard contractual clauses with our service providers to ensure they protect your information and to enforce legal transfers of data internationally.'}
,
{title:'8. Security.',Dis:'We have put in place appropriate security measures to protect your personal information from being accidentally lost, misused or accessed in an unauthorised way, altered or disclosed. These include technical, administrative and physical security measures to ensure that any information we collect is stored and processed securely.For example, for Digital Tools that require personal or sensitive data to be collected or displayed, a Secured Socket Layer (SSL) connection is required, to ensure that the data is encrypted as it is transferred to the browser. All credit card payments are processed using PCI compliant technology, to ensure that your credit card number is securely passed to the merchant/service provider. We do not store your credit card details. We have procedures to deal with any suspected personal data breach and we will promptly notify you and any applicable regulator of a breach in accordance with our legal obligations. We cannot guarantee that the security measures we implement in connection with the operation of the site will absolutely prevent others from accessing or acquiring any information that you provide while using the site. You can help us protect your personal information by properly protecting your password and remembering to sign out of your account and close your browser window when you finish visiting our site, especially if you are on a shared or public computer.'}
,{title:'9. How long we keep your personal information.',Dis:'We keep your information as long as it is needed to achieve our purposes listed above, as well as for the amount of time necessary to meet any legal, tax, or reporting requirements. We do not keep your personal information for longer than necessary and up to 7 years after your last interaction with us (e.g. making a donation, registering for an event, or using one of our Digital Tools). We may keep your data for longer than 7 years for legal or technical reasons. We may also keep it for statistical purposes. However, if we do, we will ensure that your privacy continues to be protected and only use it for these purposes.'}
]
    return(
        <div>
           
<h1 className='text-center mt-20'>Your Privacy</h1>
{privacy.map((data,index)=>(
    <div className='md:ml-32 md:mr-32 mr-5 ml-5 mt-5'> 
<h4>{data.title}</h4>
<p className='text-justify'>{data.Dis}</p>
</div>
))}
        </div>

    )
}