import React from "react";

// ── Legal content ─────────────────────────────────────────────────────────────
export const PRIVACY_POLICY = `KAZAR PRIVACY POLICY

1. Introduction
Welcome to Kazar, an escrow and deal-protection platform that facilitates secure transactions between buyers and sellers of physical goods, digital products, and services on social media and online marketplaces. We are committed to protecting the privacy and personal data of everyone who uses our platform.

This Privacy Policy explains what information we collect, how we use it, who we share it with, and your rights regarding your personal data. By using Kazar, you agree to the terms of this Privacy Policy.

2. Who We Are
Kazar is operated by Kazar Technologies, with its principal place of business in Abuja, Nigeria.

Email: kazartechnology@gmail.com
Address: Abuja, Nigeria

3. Information We Collect

3.1 Information You Provide Directly
When you register or use Kazar, we collect:
- Full name and username
- Email address and phone number
- Bank account details and payment information
- Profile photo
- Deal information including item descriptions, pricing, and agreed terms
- Dispute details and supporting documentation
- Communications with Kazar support

3.2 Information Collected Automatically
- Device information (type, OS, unique identifiers)
- Log data (IP address, pages visited, timestamps)
- Cookies and similar tracking technologies
- Transaction metadata (deal creation time, payment timestamps)

3.3 Information from Third Parties
We may receive information from payment processors, logistics partners, or identity verification services.

4. How We Use Your Information
- To create and manage your Kazar account
- To facilitate deal creation, acceptance, and execution
- To process payments and manage escrow funds
- To handle disputes and take appropriate action
- To send transactional notifications and deal updates
- To verify identity and prevent fraud
- To comply with Nigerian laws including the NDPA 2023
- To improve platform services and security

5. Legal Basis for Processing
- Contractual necessity
- Legal obligation
- Legitimate interests
- Consent

6. How We Share Your Information
We do not sell your personal data. We may share your information with:
- The other party to a deal (to the extent necessary)
- Logistics partners for physical delivery
- Payment processors and financial institutions
- Identity verification services for KYC compliance
- Law enforcement where required by law
- Professional advisers under confidentiality obligations

7. Escrow and Payment Data
All funds deposited through Kazar are held in designated holding accounts. We retain payment and transaction records in accordance with Nigerian financial regulations.

8. Data Retention
- Account and profile data: retained for the duration of your account and up to 5 years after closure
- Transaction and deal records: minimum 7 years (Nigerian financial regulations)
- Dispute records: up to 3 years after resolution

9. Data Security
We implement appropriate technical and organisational security measures including encryption of payment data, access controls, and regular security assessments.

10. Your Rights (Nigeria Data Protection Act 2023)
- Right of access
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to data portability
- Right to object
- Right to withdraw consent

To exercise any rights, contact us and we will respond within 30 days.

11. Contact Us
Email: kazartechnology@gmail.com
Address: Abuja, Nigeria`;

export const TERMS = `KAZAR TERMS AND CONDITIONS

1. Introduction and Acceptance
These Terms and Conditions govern your access to and use of the Kazar platform, including our website, mobile application, and all related services. By registering on or using the Kazar Platform, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.

2. Eligibility
To use the Kazar Platform, you must:
- Be at least 13 years of age
- Be a resident of or operating within a jurisdiction where Kazar's services are lawfully available
- Provide accurate, truthful, and complete registration information

3. Account Registration and Security
You are responsible for maintaining the confidentiality of your account credentials. You agree to:
- Provide accurate and complete information during registration
- Notify Kazar immediately of any unauthorised account access
- Not share your login credentials with any third party
- Not create multiple accounts without prior written authorisation

4. How the Kazar Platform Works

4.1 Deal Creation
Either the buyer or seller may initiate a deal. You must provide:
- Nature of the deal (physical goods, digital products, or services)
- Full description including specifications
- Agreed price and currency
- Delivery or fulfilment timeline
- Any other mutually agreed terms

4.2 Deal Acceptance
By accepting a deal, the second party confirms that the terms accurately reflect the agreed transaction and consents to be bound by them.

4.3 Escrow Payment
Upon acceptance, the buyer must deposit the full transaction amount into the escrow account. Funds are held in escrow until the deal is confirmed as fulfilled.

4.4 Fulfilment by the Seller
Upon notification of payment, the seller must fulfil the deal in accordance with agreed terms. The seller is responsible for ensuring goods are dispatched in good condition.

4.5 Buyer Confirmation and Fund Release
Upon satisfactory receipt, the buyer must confirm through the Platform. Kazar will then release funds (less applicable fees) to the seller.

4.6 Disputes
If unsatisfied, the buyer may initiate a formal dispute. Kazar will review and may contact both parties, engage third parties, or issue a resolution. Kazar's decision is final and binding.

5. Platform Fees
- Fees are calculated and disclosed at deal creation
- Fees are incorporated into the buyer's escrow deposit
- Fees are non-refundable once a deal has been accepted and paid

6. User Obligations
All users agree to:
- Use the Platform only for lawful purposes
- Provide accurate and truthful information
- Communicate respectfully and in good faith
- Not attempt to conduct transactions outside the Platform to circumvent fees

7. Prohibited Activities
The following are strictly prohibited:
- Listing or transacting in illegal goods or services
- Using the Platform for money laundering or fraud
- Attempting to manipulate deal terms after acceptance
- Creating fake accounts or impersonating others
- Circumventing Kazar's fee structure or escrow system

8. Limitation of Liability
Kazar acts as an intermediary. We are not responsible for the quality, safety, or legality of goods transacted through the Platform. Kazar's total liability shall not exceed the total Kazar fees paid in connection with the relevant transaction.

9. Off-Platform Transactions
Kazar explicitly disclaims all liability for transactions conducted outside the Platform. Users are strongly advised to always use the Kazar Platform for every transaction.

10. Governing Law
These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes shall first be subject to good-faith negotiation, then mediation, and if unresolved, to courts of competent jurisdiction in Abuja, Nigeria.

11. Contact Us
Email: kazartechnology@gmail.com
Address: Abuja, Nigeria`;

// ── Formatted renderer ───────────────────────────────────────────────────────

const TOP_LEVEL_HEADING = /^\d+\.\s/; // "1. Introduction"
const SUB_HEADING = /^\d+\.\d+\s/; // "3.1 Information You Provide Directly"
const BULLET = /^-\s/; // "- Full name and username"
const LABELLED_LINE = /^(Email|Address):\s*(.*)$/i;

/**
 * Renders the legal text blocks (PRIVACY_POLICY / TERMS) with section
 * headings, sub-headings, bullet lists, and labelled contact lines styled
 * using the app's primary token for emphasis, with full dark mode support.
 * The first line (the document title) is rendered separately by the modal
 * title and skipped here.
 */
export const LegalContent: React.FC<{ text: string }> = ({ text }) => {
	const lines = text.split("\n");

	const blocks: React.ReactNode[] = [];
	let bulletBuffer: string[] = [];

	const flushBullets = (key: string) => {
		if (bulletBuffer.length === 0) return;
		blocks.push(
			<ul key={key} className="my-4 space-y-3 pl-1">
				{bulletBuffer.map((item, i) => (
					<li
						key={i}
						className="flex gap-3 text-sm md:text-base text-bodydark2 dark:text-bodydark leading-relaxed"
					>
						<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
						<span>{item}</span>
					</li>
				))}
			</ul>,
		);
		bulletBuffer = [];
	};

	// Skip the first non-empty line (document title) — shown as the modal title instead.
	let skippedTitle = false;

	lines.forEach((rawLine, index) => {
		const line = rawLine.trim();
		const key = `b-${index}`;

		if (!skippedTitle) {
			if (line === "") return;
			skippedTitle = true;
			return;
		}

		if (line === "") {
			flushBullets(`ul-${key}`);
			return;
		}

		if (BULLET.test(line)) {
			bulletBuffer.push(line.replace(BULLET, ""));
			return;
		}

		flushBullets(`ul-${key}`);

		if (TOP_LEVEL_HEADING.test(line)) {
			blocks.push(
				<h3
					key={key}
					className="mt-8 mb-3 text-base md:text-lg font-bold text-primary border-l-4 border-primary pl-3"
				>
					{line}
				</h3>,
			);
			return;
		}

		if (SUB_HEADING.test(line)) {
			blocks.push(
				<h4
					key={key}
					className="mt-5 mb-2 text-sm md:text-base font-semibold text-primary"
				>
					{line}
				</h4>,
			);
			return;
		}

		const labelMatch = line.match(LABELLED_LINE);
		if (labelMatch) {
			blocks.push(
				<p
					key={key}
					className="text-sm md:text-base text-bodydark2 dark:text-bodydark leading-relaxed mb-2"
				>
					<span className="font-semibold text-graydark dark:text-white">
						{labelMatch[1]}:
					</span>{" "}
					{labelMatch[2]}
				</p>,
			);
			return;
		}

		blocks.push(
			<p
				key={key}
				className="text-sm md:text-base text-bodydark2 dark:text-bodydark leading-relaxed mb-3"
			>
				{line}
			</p>,
		);
	});

	flushBullets("ul-final");

	return <div className="space-y-1">{blocks}</div>;
};
