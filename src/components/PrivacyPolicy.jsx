import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PrivacyPolicy() {
  return (
    <div className="mainContainer">
      <div className="intro">
        <div className="header-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
        <h1 className="header">Privacy Policy</h1>
      </div>

      <div className="policy-content">
        <p className="medium">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
        <h2 className="header green">Information We Collect</h2>
        <p className="medium">
        We collect different types of information from and about you to provide and improve our services, including:
        <ul>
          <li>
          <strong>Information You Provide to Us Directly:</strong>
          <strong>Profile Information</strong>: When you create a profile, you may provide your name, email address, location and a profile photo.
            Content and Communications: Information you post or share within the App, such as your progress, comments, and interactions with other users.
            Customer Support Information: Information you provide when you contact us for support or other inquiries.
            </li>
            <li>
            <strong>Information We Collect Automatically:</strong>
            <strong>Usage and Activity Data</strong>: We collect information about how you use the App, including the features you access, the step-by-step guides you complete, and your overall progress.
            Technical Data: We may collect your device's IP address, unique device identifiers, operating system, and mobile network information.
            Social Interactions: We collect data related to your social activities within the App, such as the progress you share and how other users interact with your content.
            </li>
            <li>
            <strong>Information from Third Parties:</strong>
            <strong>Social Media</strong>: If you choose to share your progress on social media platforms, we may receive limited information from those platforms in accordance with their privacy policies.
            </li></ul>
        </p>

        <h2 className="header green">How We Use Your Information</h2>
        <p className="medium">
        We use the information we collect for the following purposes:
        <ul>
          <li>
          <strong>To Provide and Maintain the App</strong>: To operate and deliver the services, including creating and managing your profile and tracking your progress.
            </li>
            <li>
            <strong>To Personalize Your Experience</strong>: To tailor the content, provide recommendations adapted to the information you provide us, calculate your contribution and impact. 
            </li>
            <li>
            <strong>To Enable Social Features</strong>: To allow you to see and share your progress with other users and to enable the community feed.
            </li>
            <li>
            <strong>For Analytics and Improvement</strong>: To understand how users interact with the App, identify trends, and improve the functionality and content.
            </li>
            <li>
            <strong>For Communication</strong>: To send you service-related notifications, updates, and customer support responses.
            </li>
            <li>
            <strong>For Security and Fraud Prevention</strong>: To protect the App, our users, and our business from fraud, abuse, and illegal activities.
            </li>
            </ul>
          </p>

        <h2 className="header green">Sharing Your Information</h2>
        <p className="medium">
        We may share your Personal Information with third-party service providers who help us operate the Website and Services. These service providers are contractually obligated to keep your information confidential and secure. We will not share your Personal Information with any third-party for marketing purposes without your consent.
        </p>

        <h2 className="header green">Your Privacy Rights</h2>
        <p className="medium">
        Depending on where you reside, you may have specific rights regarding your personal information under laws like the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These rights may include:
        <ul>
          <li>
          <strong>Right to Know</strong>: The right to request information about the personal information we have collected about you, including the categories of information, the sources from which it was collected, and the purposes for which it was used.
            </li>
            <li>
            <strong>Right to Delete</strong>: The right to request the deletion of your personal information that we have collected, subject to certain exceptions.
            </li>
            <li>
            <strong>Right to Correct</strong>: The right to request the correction of inaccurate personal information we maintain about you.
            </li>
            <li>
            <strong>Right to Opt-Out of Sharing</strong>: The right to direct us not to share your personal information with third parties for cross-context behavioral advertising. We do not currently engage in this type of sharing.
            </li>
            </ul>
            <strong>To exercise your rights, please submit a request to us at Info@wearesomething.io.</strong>
          </p>


        <h2 className="header green">Data Retention</h2>
        <p className="medium">
        We will retain your Personal Information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h2 className="header green">Security</h2>
        <p className="medium">
          We take reasonable steps to protect your Personal Information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is completely secure, so we cannot guarantee the security of your information.
        </p>

        <h2 className="header green">Children's Privacy</h2>
        <p className="medium">
        Our App and Services are not directed to children and young adults under the age of 18. As a result, we do not knowingly collect Personal Information for anyone under that age. If we learn that we have collected personal information from a child under 18, we will take immediate steps to delete that information from our records.If you are a parent or guardian and you believe that your child has provided Personal Information to us, please contact us.
        </p>

        <h2 className="header green">Changes to this Privacy Policy</h2>
        <p className="medium">
        We reserve the right to update this privacy policy at any time to reflect legal requirements, changes in practices or for other operational reasons. Any updates will be notified within the app, and the revised policy will take effect as soon as it is made available. 
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

      <div className="header-container">
          <Link to="/" className="back-link">← Back to Home</Link>
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

export default PrivacyPolicy;
