export interface FaqItem {
	question: string;
	answer: string;
}

export interface FaqCategory {
	id: string;
	title: string;
	icon: string;
	items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
	{
		id: "general",
		title: "About Kazar & Trust",
		icon: "🔐",
		items: [
			{
				question: "What is Kazar?",
				answer:
					"Kazar is a Nigerian peer-to-peer escrow platform that protects both buyers and sellers in product transactions. When you make a deal on Kazar, the buyer's payment is held securely in an escrow account — it doesn't reach the seller until the buyer confirms they've received exactly what was ordered. Think of Kazar as a neutral, trusted middleman that holds the money until both parties are satisfied.",
			},
			{
				question: "Why should I trust Kazar with my money?",
				answer:
					"Kazar is built on regulated banking infrastructure. Your funds are held through Safe Haven Microfinance Bank, a digital microfinance bank duly licensed and regulated by the Central Bank of Nigeria (CBN). Safe Haven MFB is not Kazar — they are an independent, CBN-licensed institution that provides the underlying banking rails on which Kazar operates. Your money sits in a regulated bank account, not on our servers and not in an unregulated digital wallet.\n\nWhat this means practically: every naira that enters the escrow is traceable, every movement is recorded, and the funds cannot be released to any party without the conditions of your specific deal being satisfied. Kazar manages the deal logic and the trust framework. Safe Haven MFB holds and moves the money under CBN regulation. Both layers working independently is what makes the system secure — no single entity, including Kazar itself, has unilateral access to your funds.",
			},
			{
				question: "Is Kazar regulated?",
				answer:
					"Kazar operates within Nigeria's financial regulatory framework and is registered with SCUML (Special Control Unit Against Money Laundering). The banking infrastructure underpinning Kazar is provided by Safe Haven MFB, which is independently licensed by the Central Bank of Nigeria (CBN). Kazar bears full responsibility for the KYC (Know Your Customer) verification of all users on the platform under CBN AML/CFT guidelines and NFIU requirements.",
			},
			{
				question: "Who is Kazar for?",
				answer:
					"Kazar is for anyone buying or selling goods of value in Nigeria — whether you're an individual selling a gadget, a small business owner, a social media vendor, or a buyer tired of getting defrauded on online marketplaces. If money and trust are involved in a transaction, Kazar is for you.",
			},
			{
				question: "Is Kazar a bank?",
				answer:
					"No. Kazar is an escrow and deal management platform — we are not a bank. The banking infrastructure is provided by Safe Haven MFB, a CBN-licensed microfinance bank that operates independently of Kazar. Your money sits in a regulated bank account at Safe Haven MFB, not in Kazar's pocket. Kazar manages the deal terms, timelines, and trust conditions that govern when and how those funds move.",
			},
			{
				question:
					"What makes Kazar different from just paying someone directly or using other platforms?",
				answer:
					"When you pay someone directly, you have zero recourse if they disappear or send the wrong item. With Kazar, the seller only receives money after you confirm delivery or after an inspection window closes. The entire deal — terms, timeline, shipping, disputes — is documented and enforced on the platform. No other Nigerian consumer marketplace offers this level of structured, legally traceable protection.",
			},
		],
	},
	{
		id: "onboarding",
		title: "Account & Onboarding",
		icon: "👤",
		items: [
			{
				question: "How do I create a Kazar account?",
				answer:
					"Download the Kazar app, sign up with your email address, and verify your email. That gives you a Tier 1 account. To create or participate in deals, you'll need to complete profile activation (Tier 2) by verifying your BVN and linking a withdrawal bank account.",
			},
			{
				question: "What is BVN verification and why is it required?",
				answer:
					"Your Bank Verification Number (BVN) is a unique identity number issued by the CBN that ties you to your bank records. Kazar uses BVN to verify that you are who you say you are. This is not optional — it is a regulatory requirement under CBN's AML/CFT guidelines, and it protects every other user on the platform from transacting with anonymous or fraudulent accounts.",
			},
			{
				question: "What information does Kazar store from my BVN verification?",
				answer:
					"We use your BVN to verify your identity and create your Kazar wallet sub-account with Safe Haven MFB. We do not display your raw BVN number in the app or share it with other users. It is stored securely and accessed only by authorised systems for compliance purposes.",
			},
			{
				question: "What is a Kazar wallet sub-account?",
				answer:
					"When you complete Tier 2 activation, Kazar automatically creates a unique bank sub-account for you through Safe Haven MFB. This sub-account has its own account number, and it's the account you fund when you want to pay for a deal. It's linked to your identity and yours alone.",
			},
			{
				question: "Can I use Kazar without completing BVN verification?",
				answer:
					"You can browse the platform and receive deal invitations at Tier 1, but you cannot create deals, accept deals, or make payments without completing BVN verification (Tier 2). This protects everyone — including you.",
			},
			{
				question: "What is the difference between Tier 2 and Tier 3 accounts?",
				answer:
					"Tier 2 — Verified with BVN and a linked withdrawal account. You can create and participate in deals up to ₦200,000 per deal.\n\nTier 3 — Enhanced verification for deals above ₦200,000. You upgrade as either a Personal account (individual seller without a registered business) or a Business account (CAC-registered entity). There is no upper limit on deal value at Tier 3.",
			},
			{
				question: "How do I upgrade to Tier 3?",
				answer:
					'Go to your profile settings and select "Upgrade Account." Choose your track — Personal or Business — provide the required documents, and our compliance team will review your application within 3–5 business days. Personal upgrades may be auto-approved if all checks pass automatically.',
			},
			{
				question: "What documents are needed for Tier 3 Personal upgrade?",
				answer:
					"You'll need your NIN slip, a valid government-issued ID (international passport, driver's licence, or voter's card), a proof of address not older than 90 days (utility bill or bank statement), a selfie/liveness check, and a source of funds declaration.",
			},
			{
				question: "What documents are needed for Tier 3 Business upgrade?",
				answer:
					"CAC Certificate of Incorporation, CAC Status Report, FIRS Tax Identification Number (TIN) certificate, Memorandum and Articles of Association (MEMART), business address proof, and a director's government-issued ID. The primary director's BVN must match the BVN on the account.",
			},
			{
				question: "Can I have more than one Kazar account?",
				answer:
					"No. One account per person. Your BVN is tied to a single account and the system enforces this. Attempting to create multiple accounts is a violation of our terms and may result in a permanent ban.",
			},
			{
				question: "How do I add or change my withdrawal bank account?",
				answer:
					"Go to your profile settings and update your withdrawal details. Note that for security reasons, there is a cooling period after changing withdrawal details before you can initiate a withdrawal — this protects you in case your account is ever compromised.",
			},
		],
	},
	{
		id: "deals",
		title: "Creating & Managing Deals",
		icon: "🤝",
		items: [
			{
				question: "Who creates a deal — the buyer or the seller?",
				answer:
					"The seller creates the deal and invites the buyer by email or phone number. The seller sets the product details, price, delivery timeline, inspection window, and who pays the escrow fee. The buyer then reviews the terms and can accept, negotiate, or decline.",
			},
			{
				question: "What information is captured in a deal?",
				answer:
					"Every deal captures: product name, category, condition, quantity, brand, model, price, delivery timeline, delivery type (same-city or interstate), inspection window duration, escrow fee arrangement, and a full description. These terms are hashed at creation — any tampering is detected automatically.",
			},
			{
				question: "Can I invite someone who is not yet on Kazar?",
				answer:
					"Yes. You can invite a buyer using their phone number or email even if they're not yet registered. They'll receive an invitation with a deal link and will be prompted to create and verify their account before they can accept the deal.",
			},
			{
				question: "How long does a deal invitation last?",
				answer:
					"Deal invitations expire after 72 hours. If the buyer doesn't respond within that window, the deal automatically expires and the seller will need to create a new one.",
			},
			{
				question: "Can the buyer negotiate the deal terms?",
				answer:
					"Yes. The buyer can request changes to the price, description, delivery timeline, inspection window, delivery type, quantity, condition, brand, or model. There are a maximum of 3 negotiation rounds. The seller can accept the changes, counter-propose, or reject and ask the buyer to accept the original terms.",
			},
			{
				question:
					"Can the seller change the deal terms after the buyer has accepted?",
				answer:
					"No. Once the buyer accepts the deal terms, those terms are locked. The terms are cryptographically hashed at the point of acceptance and verified before any payment is processed. Any attempt to modify terms after acceptance would be detected and rejected by the system.",
			},
			{
				question: "Can a deal be cancelled?",
				answer:
					"Before payment: Either party can cancel a deal that hasn't been funded yet, with a stated reason. No funds are moved.\n\nAfter payment (escrow funded): The buyer cannot unilaterally cancel. They must either confirm delivery, raise a dispute, or contact support. The seller also cannot cancel once funded. Any cancellation at this stage requires admin involvement.",
			},
			{
				question:
					"What happens if I accidentally create a deal with the wrong details?",
				answer:
					"Cancel the deal before the buyer accepts it — no harm done. If the buyer has already accepted and paid, you'll need to contact Kazar support. This is why reviewing your deal details carefully before sending the invitation is important.",
			},
		],
	},
	{
		id: "payments",
		title: "Payments & Escrow",
		icon: "💳",
		items: [
			{
				question: "How does payment work on Kazar?",
				answer:
					"After the buyer accepts the deal terms, they have 24 hours to fund the escrow. They top up their Kazar wallet and the system debits the exact deal amount (including fees) from their wallet into the escrow holding account. The seller is notified immediately that funds are secured and they should ship.",
			},
			{
				question: "How do I fund my Kazar wallet?",
				answer:
					"Transfer money to your unique Kazar wallet sub-account number (issued by Safe Haven MFB). The transfer can come from any Nigerian bank. Your wallet balance updates automatically when the funds arrive.",
			},
			{
				question: "What is the escrow fee and who pays it?",
				answer:
					"The escrow fee is Kazar's service charge for securing and managing the transaction. The exact percentage is calculated based on the deal amount. Crucially, you and the other party decide who pays it when setting up the deal — options are Buyer pays, Seller pays, or Split equally between both. You'll see the full fee breakdown before committing to anything.",
			},
			{
				question: "Can I see the full fee breakdown before paying?",
				answer:
					"Yes. The deal summary shows the product price, escrow fee, and total amount due clearly before the buyer makes any payment. There are no hidden charges.",
			},
			{
				question: "What happens to my money while it's in escrow?",
				answer:
					"Your funds are held in Kazar's designated holding account at Safe Haven MFB (CBN-licensed). The money is ring-fenced — it cannot be used by Kazar for any other purpose. It stays frozen until either the buyer confirms delivery, the inspection window expires, or a dispute is resolved.",
			},
			{
				question: "What if I don't have enough in my wallet to pay for a deal?",
				answer:
					"You'll need to top up your wallet before attempting payment. The payment window is 24 hours from the point of accepting the deal. If you don't fund the escrow within 24 hours, the deal expires.",
			},
			{
				question:
					"Can I get a refund of my wallet balance if I decide not to use it?",
				answer:
					"Yes. Any funds sitting in your wallet that are not locked in an active deal can be withdrawn to your registered bank account at any time.",
			},
		],
	},
	{
		id: "shipping",
		title: "Shipping & Delivery",
		icon: "📦",
		items: [
			{
				question: "Who is responsible for shipping?",
				answer:
					"The seller is responsible for shipping the item within the agreed delivery timeline (plus a 48-hour grace period). The seller must upload a valid tracking number and the courier name after dispatch.",
			},
			{
				question: "What delivery types does Kazar support?",
				answer:
					"Two types — Same-City (3 business day transit window) and Interstate (7 business day transit window). The seller declares the delivery type when creating the deal, which determines how long the transit window runs before Kazar flags the shipment as overdue.",
			},
			{
				question:
					"What happens if the seller doesn't ship within the agreed timeline?",
				answer:
					"If the seller misses their shipping deadline (agreed days plus the 48-hour grace period), the deal is automatically marked as Seller Defaulted and a full refund is initiated to the buyer. No negotiation, no extension — the deadline is firm.",
			},
			{
				question:
					"What happens if my item hasn't arrived after the transit window?",
				answer:
					"The deal is flagged as Flagged Transit and enters an admin investigation. Our team will contact the courier, review tracking records, and take one of three actions: confirm delivery and open your inspection window, confirm the item was lost and issue a full refund, or escalate to a formal dispute process.",
			},
			{
				question: "What should I do when I receive the item?",
				answer:
					"Log into your Kazar account and mark the item as delivered. This starts your inspection window. Do not mark it as delivered before you've physically received and verified the item — the inspection clock starts the moment you mark it.",
			},
		],
	},
	{
		id: "inspection",
		title: "Inspection & Confirmation",
		icon: "🔍",
		items: [
			{
				question: "What is the inspection window?",
				answer:
					"The inspection window is the period after you mark an item as delivered during which you can examine it and either confirm satisfaction or raise a dispute. The window is set when the deal is created — either 48 or 72 hours (the seller can offer up to 72 hours at deal creation).",
			},
			{
				question: "What can I do during the inspection window?",
				answer:
					"Confirm delivery — you're satisfied. Funds are released to the seller immediately.\n\nRaise a dispute — there's a problem. Funds stay frozen and a formal dispute process begins.",
			},
			{
				question: "What happens if I don't act within the inspection window?",
				answer:
					"If you take no action by the inspection deadline, delivery is automatically confirmed and funds are released to the seller. This is by design — the inspection window is your protected opportunity to raise issues. If you miss it, the deal closes in the seller's favour.",
			},
			{
				question:
					"Can I raise a dispute before the item is marked as delivered?",
				answer:
					"Yes. If you believe there's a problem while the item is still in transit — for example, you have reason to believe the seller sent nothing — you can raise a dispute from the Shipped status. The system will automatically transition the deal through the correct states before opening the dispute.",
			},
		],
	},
	{
		id: "disputes",
		title: "Disputes & Resolution",
		icon: "⚖️",
		items: [
			{
				question: "What situations qualify for a dispute?",
				answer:
					"You can raise a dispute for any of these reasons: Item Not As Described, Item Not Received, Item Damaged, Wrong Item Sent, Incomplete Order, or Other.",
			},
			{
				question: "How do I raise a dispute?",
				answer:
					'During your inspection window, select "Raise a Dispute" in the deal screen. You\'ll be asked to select a dispute category, describe the issue in detail, upload evidence (up to 5 photos or documents), and specify your desired resolution — full refund, partial refund, or replacement.',
			},
			{
				question: "What happens after I raise a dispute?",
				answer:
					"Your funds remain frozen. The seller is immediately notified and has 24 hours to submit their response and evidence. If the seller fails to respond within 24 hours, the decision automatically goes in your favour and a refund is initiated. If the seller responds, a Kazar compliance officer reviews both sides and issues a binding resolution.",
			},
			{
				question: "What resolution options are available in a dispute?",
				answer:
					"Full Refund — full amount returned to the buyer.\n\nPartial Refund — agreed split where the buyer receives part of the funds and the seller receives the rest.\n\nReplacement — buyer requests the seller resend the correct item.\n\nThe final resolution decision is made by Kazar's team after reviewing all evidence from both parties. It is binding.",
			},
			{
				question: "Can the seller see my dispute evidence?",
				answer:
					"The seller sees your dispute category, description, and the count of evidence items submitted. The seller then submits their own evidence and position. Kazar's team reviews both sides independently.",
			},
			{
				question: "How long does dispute resolution take?",
				answer:
					"The seller has 24 hours to respond. Once both sides have submitted their case, our compliance team aims to issue a resolution within 3–5 business days depending on the complexity of the case and the volume of evidence submitted.",
			},
			{
				question: "Can I appeal a dispute decision?",
				answer:
					"Dispute decisions made by Kazar's compliance team are binding. If you believe there was a material error in the process, you can contact Kazar support with new evidence — however, overturning a decided dispute requires substantial grounds.",
			},
			{
				question: "What if the seller agrees to refund me voluntarily?",
				answer:
					"The seller can indicate in their dispute response that they are willing to refund. Kazar's team will still formally close the dispute and process the refund through the platform — no side deals or off-platform payments are accepted.",
			},
		],
	},
	{
		id: "withdrawals",
		title: "Withdrawals & Settlements",
		icon: "💰",
		items: [
			{
				question: "When are funds released to the seller?",
				answer:
					"Funds are released to the seller's registered bank account when any of the following happens: the buyer confirms delivery, the inspection window expires without any action from the buyer, or Kazar's team rules in the seller's favour after a dispute.",
			},
			{
				question:
					"How long does it take for the seller to receive payment after release?",
				answer:
					"Settlement to the seller's registered bank account is processed via interbank transfer and typically arrives within minutes to a few hours depending on interbank processing times.",
			},
			{
				question: "How do I withdraw my wallet balance?",
				answer:
					"Go to your wallet section in the app, select Withdraw, confirm your registered bank account details, and submit. You'll need to authorise the withdrawal through your configured authentication method.",
			},
			{
				question: "Are there withdrawal limits?",
				answer:
					"Withdrawal limits are tied to your account tier and are subject to CBN-regulated transaction limits for your account type. You can view your current limits in your profile.",
			},
			{
				question: "What happens to the escrow fee if the deal falls through?",
				answer:
					"It depends on where in the deal lifecycle things went wrong. If the deal is cancelled before payment — during negotiation, after the buyer accepts but before funding the escrow, or because the invitation expired — no fee is charged at all. Nothing leaves anyone's pocket.\n\nIf the deal is cancelled after payment (escrow already funded), the fee situation is straightforward: Kazar's escrow fee is non-refundable. The fee covers the cost of securing, managing, and guaranteeing the transaction — work that has already been performed the moment funds enter escrow, regardless of what happens next.\n\nWhat the buyer receives back in a seller default or a dispute resolved in their favour is the deal amount minus the escrow fee (or the portion of the fee the buyer was responsible for, depending on the fee arrangement agreed at the start). This exact refundable amount is clearly displayed in the deal details before the buyer makes any payment — so there are no surprises. You always know precisely what you get back if things go wrong before you commit a single naira.",
			},
		],
	},
	{
		id: "safety",
		title: "Safety, Fraud & Compliance",
		icon: "🛡️",
		items: [
			{
				question:
					"What stops someone from creating a fake deal to steal my money?",
				answer:
					"Several layers of protection work together. Every user is BVN-verified — there is no anonymity on Kazar. Every deal has a cryptographic hash of its terms at creation — terms cannot be changed after the buyer accepts. Funds go into an escrow account, not to the seller — the seller never touches your money until delivery is confirmed. And every transaction is recorded in an immutable audit trail.",
			},
			{
				question: "What if the seller tries to send me something worthless?",
				answer:
					"That's exactly what the inspection window and dispute system are for. Do not confirm delivery until you have properly inspected the item. If what you received doesn't match what was agreed, raise a dispute with photo evidence during your inspection window. Funds stay frozen until the matter is resolved.",
			},
			{
				question:
					"What if a buyer tries to falsely claim they didn't receive an item?",
				answer:
					"The seller's protection is the tracking number. A seller who has valid tracking evidence from a reputable courier showing confirmed delivery is in a strong position during a dispute. Kazar's team reviews all evidence from both sides before making any decision — it is not automatically in the buyer's favour.",
			},
			{
				question:
					"What happens if I suspect fraudulent activity on my account?",
				answer:
					"Contact Kazar support immediately. Do not share your OTP, password, or authentication codes with anyone — including people claiming to be Kazar staff. Kazar will never ask you for your OTP over the phone, via email, or in a DM.",
			},
			{
				question: "Does Kazar comply with anti-money laundering laws?",
				answer:
					"Yes — fully and formally. Kazar is registered with and compliant with the Special Control Unit Against Money Laundering (SCUML), Nigeria's designated supervisory body for designated non-financial businesses and professions (DNFBPs) under the Money Laundering (Prevention and Prohibition) Act 2022. SCUML compliance is not optional for escrow and payment facilitation platforms operating in Nigeria — it is a legal requirement, and Kazar meets it.\n\nBeyond SCUML registration, Kazar operates under the full framework of CBN AML/CFT (Anti-Money Laundering / Combating the Financing of Terrorism) guidelines and the FATF (Financial Action Task Force) recommendations that Nigeria has adopted. Kazar bears full and sole responsibility for verifying the identity of every user on the platform — this is not delegated to Safe Haven MFB. In practice, every account is KYC-verified using BVN, and Kazar conducts appropriate customer due diligence, including PEP (Politically Exposed Persons) and sanctions list screening, using a risk-based approach. There is no anonymity on Kazar.\n\nTransaction activity is continuously monitored for suspicious patterns including unusual funding behaviour, structuring, and rapid fund cycling. Where required by law, suspicious transaction reports (STRs) are filed with the Nigerian Financial Intelligence Unit (NFIU) via the appropriate channels.\n\nFor high-value transactions and Tier 3 account upgrades, Kazar applies Enhanced Due Diligence (EDD) — requiring additional identity documents, source of funds declarations, and in the case of registered businesses, full KYB (Know Your Business) verification including CAC documents and director identity checks. User identification records are retained for at least 5 years from the end of the business relationship, in line with Kazar's regulatory obligations.\n\nYour money is protected. Your identity is verified. And the platform you're transacting on answers to the right authorities.",
			},
			{
				question: "Are there any transactions that are not permitted on Kazar?",
				answer:
					"Yes. Kazar's banking infrastructure operates under the regulatory framework of Safe Haven MFB, and certain transaction types are not supported on or through the platform. Specifically, foreign exchange (FX) trading and cryptocurrency transactions cannot be conducted using your Kazar wallet or through any deal on the platform. Attempting to use Kazar for these purposes is a violation of our terms and may result in account suspension and escalation to the relevant authorities.",
			},
			{
				question: "Can my account be blocked?",
				answer:
					"Yes. Accounts that violate Kazar's terms of service, are flagged for suspicious activity, or are found to be involved in fraud can be blocked by our compliance team. Legitimate users who believe their account was blocked in error can contact support.",
			},
		],
	},
	{
		id: "technical",
		title: "App & Technical",
		icon: "📱",
		items: [
			{
				question: "Which platforms is Kazar available on?",
				answer:
					"Kazar is available as a web app, mobile app (iOS and Android), and desktop app.",
			},
			{
				question: "What should I do if I'm having trouble making a payment?",
				answer:
					"First, verify that your wallet has sufficient balance for the total amount due (including fees). Ensure your payment window hasn't expired (24 hours from accepting the deal). If the problem persists, contact support with your deal ID and a description of the error.",
			},
			{
				question: "Can I use Kazar without the app?",
				answer:
					"Yes. Kazar is accessible via web browser. Full functionality is available on both the web and mobile app.",
			},
			{
				question: "Is my data safe with Kazar?",
				answer:
					"Kazar takes data privacy seriously and complies with Nigeria's NDPA (Nigeria Data Protection Act, 2023). Your personal information is encrypted, access-controlled, and never sold to third parties. You have the right to request deletion of your data, subject to regulatory retention requirements — identification records are retained for at least 5 years from the end of the business relationship as required by applicable AML regulations.",
			},
			{
				question:
					"What is Kazar's platform availability and what happens during downtime?",
				answer:
					"Kazar's banking infrastructure is provided by Safe Haven MFB under a service level agreement that guarantees a minimum 99% uptime. In the rare event of a system outage, Safe Haven MFB is contractually required to resolve any downtime within 24 hours of a formal complaint being raised.\n\nIf you experience issues accessing the platform or processing a transaction, first check whether your internet connection is stable. If the issue persists, contact Kazar support with a description of the problem and your deal ID (if applicable). Critical issues affecting frozen funds or active deals are monitored and escalated 24/7.\n\nNo deal deadlines (inspection windows, payment windows, shipping deadlines) are extended automatically during downtime — contact support immediately if you believe a technical outage affected your ability to act within a required window.",
			},
			{
				question: "What do I do if I forget my password?",
				answer:
					'Use the "Forgot Password" option on the login screen. You\'ll receive an OTP to your registered email or phone number to verify your identity and set a new password.',
			},
		],
	},
	{
		id: "support",
		title: "Support",
		icon: "📞",
		items: [
			{
				question: "How do I contact Kazar support?",
				answer:
					"You can reach us through: In-app support tickets — raise a ticket directly from your account; Email — support@kazar.com; Instagram DM — @kazarescrow; Live Chat — available on the web app during business hours.",
			},
			{
				question: "What information should I include when contacting support?",
				answer:
					"Always include your registered email address, your deal ID (if your issue is deal-related), a clear description of the problem, and any relevant screenshots. This speeds up resolution significantly.",
			},
			{
				question: "What are Kazar's support hours?",
				answer:
					"Our support team is available Monday to Friday, 8am – 6pm WAT, and Saturday 9am – 2pm WAT. Critical issues (frozen funds, security breaches) are monitored 24/7.",
			},
			{
				question: "How long does it take to get a support response?",
				answer:
					"In-app tickets are typically responded to within 2–4 business hours. Complex or compliance-related matters may take longer. You'll receive a ticket reference number and can track your ticket status in the app.",
			},
		],
	},
];
