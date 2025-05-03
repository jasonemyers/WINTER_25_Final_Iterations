import React from 'react';
import ReactMarkdown from 'react-markdown';

function UserAgreement({checked}){
  const userTechnicalInfo_In_Markdown = `
  **USER AGREEMENT**

**Introduction**

This User Agreement ("Agreement") constitutes a legally binding contract between you ("User") and the provider of this software application ("Provider"). By downloading, installing, or using this software, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions set forth in this Agreement. Users must comply with a user agreement as a condition for the downloading of the application. User agreement with data privacy, unilateral indemnity clause, language stating specific vulnerability assessments.

**A. Coding Compliance**

User input to be filtered for special characters. The software adheres to established coding standards, including required commenting practices, function naming conventions, and project directory structure.

**B. Software Compliance**

1\. User input to be filtered for special characters. Users must comply with all input validation requirements to ensure system security and data integrity.

2\. User must agree with this User Agreement as a condition to the downloading of the application, acknowledging the terms set forth herein.

3\. User agreement with data privacy, accepting the collection and processing of necessary data as outlined in our Privacy Policy.

4\. User accepts the unilateral indemnity clause, holding the Provider harmless from any claims arising from User's misuse of the software.

5\. User acknowledges the language stating specific vulnerability assessments conducted on the software and limitations thereof.

6\. The User agrees to utilize the software in accordance with all applicable coding compliance standards and regulations.

7\. User acceptance of periodic updates to ensure ongoing compliance with evolving security standards and regulations.

**C. Data Privacy**

We are committed to protecting user data. By registering your vehicle, you entrust us with personal information, which we safeguard using policies and practices that meet or exceed industry standards.

**D. Application Sharing**

We do not share your personal information with any third party. Vendors, partners, and investors have no access to your data. All cloud providers used for application sharing are thoroughly vetted to ensure they meet or exceed industry standards for privacy and security. Regular compliance audits are conducted on all vendors.

**E. Unilateral Indemnity Clause**

Customer agrees to protect, defend, hold harmless and indemnify (collectively "Indemnify" and "Indemnification") The Ultimate Car Maintenance Checklist, its subsidiaries, and its and their respective successors, assigns, directors, officers, employees, agents, stockholders, and affiliates (collectively, "Indemnified Parties") from and against all claims, demands, actions, suits, damages, liabilities, losses, settlements, judgments, costs, and whether or not involving a claim by a third party, including but not limited to reasonable attorneys' fees and costs (collectively, "Claims"), actually or allegedly, directly or indirectly, arising out of or related to (1) any breach of any representation or warranty of customer contained in this Agreement; (2) any breach or violation of any covenant or other obligation or duty of customer under this Agreement or under applicable law; (3) any third party Claims which arise out of, relate to or result from any act or omission of customer; and (4) any unauthorized use of the software, data breaches, or intellectual property violations, in each case whether or not caused in whole or in part by the negligence of The Ultimate Car Maintenance Checklist, or any other Indemnified Party, and whether or not the relevant Claim has merit. This includes, but is not limited to, actions or omissions by any operators or subcontractors acting under the direction or license of the customer.

**F. Periodic Vulnerability Assessments**

We conduct periodic vulnerability assessments that meet or exceed the industry standard. These assessments encompass the entirety of our IT systems, as well as those of our vendors. Our cybersecurity and compliance professionals are all familiar with industry leading vulnerability scanning software and maintain familiarity with the latest in cybersecurity trends and analysis.

**G. Changing Requirements**

Over time, necessity and a changing technology environment will dictate that our requirements and specifications for our software will change. When changes are made that affect the end user, we will promptly provide information about what has changed and why, and how that will affect our customers and partners.

**H. Industry-Standard Compliance**

Our cybersecurity and compliance teams strive to maintain the highest quality defense of our client's personal information. Among other resources, we use the OWASP Top 10 list to maintain awareness of the most pressing security concerns for web applications at any given moment. We maintain a continuous scan of the threat environment to update our security posture. The app complies with ISO 26262, ISO 9001, NIST, and OBD-II for the security and privacy of your data as well.

**I. Licensing**

This software is licensed, not sold. Your license grants you a non-exclusive, non-transferable right to use the software according to the terms specified in the User Agreement. License types available include:

\- Individual License: For single-user installations

\- Team License: For small teams (up to 10 users)

\- Enterprise License: For organizational deployment

License validation occurs automatically when you first launch the application. Internet connectivity is required for license activation and periodic verification.

**J. User Responsibilities**

1\. You agree to use the software in compliance with all applicable laws and regulations.

2\. You should not attempt to decompile, reverse engineer, disassemble, or hack the software.

3\. You acknowledge that the software may receive automatic updates from the Provider without additional notice.

4\. You are responsible for maintaining the confidentiality of any credentials associated with your account.

**K. Limitation of Liability**

To the maximum extent permitted by applicable law, the Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:

1\. Your use or inability to use the software.

2\. Any unauthorized access to or use of our servers and/or any personal information stored therein.

3\. Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our service by any third party.

**L. Termination**

The Provider may terminate or suspend your access to the software immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach this Agreement.

**M. Governing Law**

This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the Provider is established, without regard to its conflict of law provisions.

**N. Summary of User Agreement**

By using this application, you agree to abide by all terms outlined in this Agreement. These include compliance with coding and software standards, acceptance of data privacy policies, acknowledgment of the unilateral indemnity clause, and agreement to periodic security assessments. You accept that the software is licensed, not sold, and that your use is subject to license terms. You also agree not to reverse-engineer or misuse the application and understand that your access may be terminated for non-compliance. This Agreement is governed by the laws of the Provider’s jurisdiction.

**USER MANUAL / Installation Instructions**

**Introduction**

This document provides comprehensive installation instructions and user guidance for our software application. Please read this manual thoroughly before proceeding with use of the software.

**System Requirements**

\- Operating System: Windows 10/11, macOS 12.0+, or Linux (Ubuntu 20.04+)

\- Web browser such as Chrome or Firefox

\- Internet Connection

**Installation Procedure**

No installation necessary! This web application is fully browser-based and requires no setup or installation. To get started, simply follow these steps:

Open your preferred browser.

(We recommend the latest version of Chrome, Firefox, or Edge for the best experience.)

Navigate to the application

Visit the app at: <https://carmaintenancechecklist.netlify.app/>

You're all set!

The app runs entirely in the browser. No downloads, no configurations, just instant access.

**Licensing**

This software is licensed, not sold. Your license grants you a non-exclusive, non-transferable right to use the software according to the terms specified in the User Agreement. License types available include:

\- Individual License: For single-user installations

\- Team License: For small teams (up to 10 users)

\- Enterprise License: For organizational deployment

License validation occurs automatically when you first launch the application. Internet connectivity is required for license activation and periodic verification.

**Operator and Subcontractor Indemnity Clause**

All operators and subcontractors using this software under your license must adhere to the terms of this agreement. You, as the primary licensee, agree to indemnify and hold harmless the Provider against any claims, damages, liabilities, costs, and expenses (including reasonable attorney's fees) arising from or related to the use of the software by any operator or subcontractor operating under your license or direction.

It is your responsibility to ensure that all operators and subcontractors are aware of and comply with the terms and conditions of this agreement. Failure to do so may result in termination of your license and potential legal action.

**Warranty Information**

This software is provided “as is,” without warranties of any kind. The provider claims all warranties, express or implied, including but not limited to:

- Functionality without interruption or errors
- Compatibility with all systems or devices
- Fitness for a particular purpose

The user assumes all risks associated with the use of the software.

**Cybersecurity & Safety**

We take cybersecurity seriously. The following measures help protect your data and ensure safe use:

- All communications are encrypted via HTTPS
- User data is stored securely in compliance with industry standards
- No sensitive personal data is collected beyond what is needed for app functionality
- Never share your login credentials
- Always log out on public/shared computers
- Ensure your browser is updated to the latest version
- If you suspect any breach or malicious behavior, contact support immediately.

**User Instructions**

1. Create an account – Sign up with your information.
2. Log in – Enter your credentials to access your dashboard.
3. Add a vehicle – Use the form to enter your vehicle info.
4. Select a vehicle – Choose the vehicle you want to manage.
5. Track mileage – Go to the Mileage Tracking page to log miles occasionally.
6. Check maintenance needs – Visit the Service Intervals page to see what needs service.
7. Log service history – Use the Service History page to add completed maintenance.
8. Enable notifications (optional) – Visit the Push Notifications page to allow browser alerts.
9. Get help – Chat with the AI on the Robot Support page if needed.
10. Find a mechanic – Use the Local Services page to locate nearby auto shops.

**Troubleshooting**

If you encounter issues during installation or use:

1\. Consult the AI support section on our website.

2\. Verify your system meets the minimum requirements

3\. Contact technical support with detailed information about the issue

Technical Support: (313) 747-5426
  `
  return(
    <div style={{position:'relative'}}>
      <div style={{
        width:'700px',
        height:'300px',
        backgroundColor:'white',
        padding:'30px',
        border:'3px solid',
        borderRadius:'30px',
        overflowY:'auto',
        marginBottom:'55px',
      }}>
      <ReactMarkdown>
        {userTechnicalInfo_In_Markdown}
      </ReactMarkdown>
    </div>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      textAlign:'center',
      justifyContent: 'center',
      paddingInline: '30%',
      width:'700px',
      position: 'absolute',
      bottom: '5px',
      backgroundColor: 'white',
      borderRadius:'30px',
      height:'45px',
      paddingBlock: '20px',
    }}>
      <strong>Accept User Agreement?</strong>
      <input style={{transform:'scale(3)', transformOrigin:'center', marginTop:'16px'}}
            type="checkbox"
            checked={checked[0]}
            onChange={(e)=>{checked[1](e.target.checked);}}
          />
    </div>
  </div>
  )
}

export default UserAgreement;