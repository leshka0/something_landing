import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function TermsOfUse() {
  return (
    <div className="mainContainer">
      <div className="intro">
        <div className="header-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
        <h1 className="header">Terms of Use</h1>
      </div>

      <div className="policy-content">
        <p className="medium">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <p className="medium">
        These Terms of Use apply to all use of We Are Something LLC  (“WeAreSomething”, “we”, “us” or “our”) platform, including our web-site and mobile application. 

By downloading, installing, or using the [Something] mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not use the App. We reserve the right to modify these Terms at any time, and your continued use of the App constitutes your acceptance of the revised Terms.

By joining our platform, you show that you want to be part of the solution to the climate crisis. You further subscribe to these fundamental principles, shared by each and every one in our network. 

        </p>

        <h2 className="header green">Community Rules</h2>
        <h3 className="green">Be kind and Respectful</h3>
        <ul className='medium'>
          <li>
            <strong>No harassment, bullying, or hate speech.</strong>
            Do not attack, threaten, or insult other users. This includes any content based on race, ethnicity, religion, gender, sexual orientation, or disability.
          </li>
          <li>
            <strong>No spam or promotion.</strong>
            Do not post repetitive content, pornographic content, solicit users for personal business, or promote third-party services.
            </li>
            <li>
            <strong>Be constructive.</strong>
            If you disagree with someone, do it respectfully. Avoid personal attacks and instead focus on constructive feedback.
          </li>
          <li>
            <strong>Be supportive.</strong>
            We are all trying to make an impact, no matter how big or small, we are here to support each other.
          </li>
          <li>
            <strong>Be inclusive.</strong>
            We welcome people of all backgrounds, identities, and perspectives. Everyone should feel safe, valued, and able to contribute.
            </li>
        </ul>

        <h3 className="green">Be kind and Respectful</h3>
        <ul className='medium'>
          <li>
            <strong>Do not share sensitive personal information.</strong>
            Never post your bank account numbers, credit card details, Social Security Number, or other private financial information.
          </li>
          <li>
            <strong>Do not share others' private information.</strong>
            You may share your own progress, but never post or expose another user’s personal details, even if they are publicly available elsewhere.
            </li>
            <li>
            <strong>Think before you post.</strong>
            Remember that any information you share on your profile or in the community feed may be visible to other users.
            </li>
        </ul>

        <h3 className="green">Consequences of Violating the Rules</h3>
        <p className="medium">We take these guidelines seriously. Any violation may result in the following actions:</p>
        <ul className='medium'>
          <li>
            <strong>Content Removal.</strong>
            We may remove any content that violates these guidelines.
          </li>
          <li>
            <strong>Account Suspension' private information.</strong>
            Your account may be temporarily suspended.
            </li>
            <li>
            <strong>Account Termination.</strong>
            For severe or repeated violations, your account may be permanently terminated.
            </li>
        </ul>
        <p className='medium'>We encourage you to use the "Report" function to flag any content or behavior that you believe violates these guidelines. Our team will review all reports and take appropriate action</p>


        <h3 className="green">User-Generated Content</h3>
        <p className="medium">We take these guidelines seriously. Any violation may result in the following actions:</p>
        <ul className='medium'>
          <li>
            <strong>Your Content.</strong>
            You are personally responsible for making sure that all content that you post  adheres to our rules of conduct as set out above. You must thus ensure that such content is true and based upon, or originates from, reliable sources, that it is allowed according to applicable laws, rules, and regulations and that it does not breach any third party rights (including but not limited to third party intellectual property rights). You retain ownership of any content you create and post on the App, such as your progress updates, comments, and profile information.
           </li>
          <li>
            <strong>Our Rights' private information.</strong>
            By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, display, and distribute your content for the purpose of operating and promoting the App. This is necessary to allow other users to see your shared progress and for us to manage the social feed.
          </li>
        </ul>
        <p className='medium'>We encourage you to use the "Report" function to flag any content or behavior that you believe violates these guidelines. Our team will review all reports and take appropriate action</p>
        

        <h3 className="green">Ownership</h3>
        <p className="medium">You may use our platform when you join but please note that all rights, title, and interest in and to the platform will remain the exclusive property of Something. Furthermore, we reserve the right to freely use any feedback, comments or suggestions you provide us with as we see fit and without any obligation to you.
        </p>

        <h3 className="green">Intellectual Property</h3>
        <ul className='medium'>
          <li>
            <strong>App Ownership.</strong>
            The App, including its design, text, graphics, and all other content, is the exclusive property of We Are Something LLC and is protected by copyright, trademark, and other intellectual property laws.
            </li>
          <li>
            <strong>Limited License.</strong>
            We grant you a limited, non-exclusive, non-transferable license to download and use the App for your personal, non-commercial use, in accordance with these Terms. You may not copy, modify, distribute, sell, or lease any part of the App.
            </li>
        </ul>

        <h3 className="green">Your personal data</h3>
        <p className="medium">We safeguard your personal integrity and aim to always protect your personal data in the best way possible. Therefore, you can find complete information on how we handle personal data in our Privacy Policy.
        </p>

        <h3 className="green">Age Restriction & Eligibility</h3>
        <p className="medium">The App provides guides and information on a variety of topics, including certain financial actions such as opening a bank account. These specific actions and related guides are intended only for users who are 18 years of age or older, as they require the legal capacity to enter into binding financial contracts.
        <br/><br/>Therefore, by accessing, viewing, or using these specific sections or features of the App, you represent and warrant that you are at least 18 years of age.
        <br/><br/>We reserve the right to verify a user's age and to restrict access to certain features, content, or services to users who do not meet the specified age requirements.
        </p>

        <h3 className="green">Amendments</h3>
        <p className="medium">We reserve the right to amend these Terms of Use. Any updates will be notified within the app, and the revised terms will take effect as soon as they are made available If you do not agree with the updated terms, please let us know that you want to delete your account. If you continue to use the network after the stated effective date of the updated Terms of Use you will be deemed to have accepted the terms. The date of the most recent update of the terms is given at the top of these terms.

        </p>

        <h3 className="green">Disclaimer</h3>
        <p className="medium">Something and its app (the "App") are a project of We Are Something LLC.The Site provides ideas and information on climate-related financial institutions and products and their relation to environmental issues. All information on the App is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the App.

        <br/><br/>The App does not provide financial advice and our ratings do not constitute endorsements or financial recommendations. The ratings provided are for informational purposes and not financial advice. Users rely on them at their own risk.

        <br/><br/>While we encourage individuals to consider moving their money away from certain institutions financing fossil fuels, this guidance is based on ethical and environmental values rather than financial advice. We do not provide recommendations regarding financial performance or risk, and any decisions should be made with consideration of your personal financial situation.

        <br/><br/>We Are Something LLC is not responsible for any financial losses related to any actions (such as opting for a financial product) taken as a result of content from this App. We Are Something LLC is also unable to account for any other issues that visitors encounter with external third parties, such as customer service or data privacy issues encountered with financial institutions linked on this website.
        </p>

        <h3 className="green">External Links and Third-Party Content</h3>
        <p className="medium">The app may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any external links does not imply our endorsement of the views expressed within them.

        </p>

        <h3 className="green">Limitation of Liability</h3>
        <p className="medium">Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the app or reliance on any information provided on the app.

        </p>

        <h3 className="green">Governing law and dispute resolution</h3>
        <p className="medium"><strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
<br/><br/><strong>Dispute Resolution:</strong> Any dispute arising from these Terms will be subject to the exclusive jurisdiction of the state and federal courts located in New-York.
</p>




<h2 className="header green">Contact Us</h2>
        <p className="medium">
        If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: info@wearesomething.io<br />
          We Are Something LLC,<br />
          117 Seven Hills Lake Drive,<br />
          Carmel, NY<br />
          10512

        </p>
      </div>

      <div className="footer">
        <div className="copyrightContainer">
          <span>Copyright something™ {new Date().getFullYear()}</span>
          <div className="termsAndConditionsContainer">
            <Link className="termsAndConditions" to="/privacy-policy">Privacy Policy</Link>
            <Link className="termsAndConditions" to="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
