import React from 'react';
import PrivacyPolicySections from '../../src/privacy_policy/PrivacyPolicySections';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
	return (
		<div className="privacy-screen">
			<div className="privacy_policy">
				<div className="privacy_header">
					<h1>Privacy Policy</h1>
				</div>
				<div className="basmalah">
					<h3>Bismillāhir-Raḥmānir-Raḥīm (بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ)</h3>
				</div>
				<PrivacyPolicySections
					header="PRIVACY NOTICE"
					subheader="Last updated Januray 10, 2020"
					notes={privacyNotice}
				/>
				<PrivacyPolicySections
					header="1. WHAT INFORMATION DO WE COLLECT?"
					subheader="We do not collect any information"
				/>
				<PrivacyPolicySections
					header="2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?"
					subheader="Your information will not be shared with anyone"
				/>
				<PrivacyPolicySections header="3. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?" subheader="No" />
				<PrivacyPolicySections
					header="4. HOW LONG DO WE KEEP YOUR INFORMATION?"
					subheader="We do not keep your information"
				/>
				<PrivacyPolicySections
					header="5. HOW DO WE KEEP YOUR INFORMATION SAFE?"
					subheader="We do not keep your information"
				/>
				<PrivacyPolicySections
					header="6. DO WE COLLECT INFORMATION FROM MINORS?"
					subheader="We do not knowingly collect data from anyone including minors."
				/>
				<PrivacyPolicySections
					header="7. WHAT ARE YOUR PRIVACY RIGHTS?"
					subheader="You may stop use and uninstall the app at anytime"
				/>
				<PrivacyPolicySections header="8. CONTROLS FOR DO-NOT-TRACK FEATURES" subheader="" notes={doNotTrack} />
				<PrivacyPolicySections
					header="9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
					subheader="Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information."
					notes={caliRights}
				/>
				<PrivacyPolicySections
					header="10. DO WE MAKE UPDATES TO THIS NOTICE?"
					subheader="Yes, we will update this notice as necessary to stay compliant with relevant laws."
				/>
				<PrivacyPolicySections
					header="11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
					subheader="If you have questions or comments about this notice, you may email me"
					notes={noticeUpdate}
				/>
				<PrivacyPolicySections
					header="12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
					subheader="We do not collect any data from you"
				/>
			</div>
		</div>
	);
}

let privacyNotice =
	'Thank you for downloading Al-Qur\'an (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, please email us\n.When you use our mobile application, as the case may be (the "App") and more generally, use any of our services (the "Services", which include the App), we appreciate that you are trusting us. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what our app does and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our app immediately. This privacy notice applies to all functions of our app.';
let doNotTrack =
	'Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.';

let caliRights =
	'We assure you that we do not collect, store, share or transfer any of your information but California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information(if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year.If you are a Californian resident and would like to make such a request, please submit your request in writing to us using our email.';

let noticeUpdate =
	'We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.';

export default PrivacyPolicy;
