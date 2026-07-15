export interface FaqItem {
	question: string;
	answer: string;
}

export interface FaqCategory {
	id: string;
	title: string;
	icon: string; // emoji, matches your doc's section markers
	items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
	{
		id: "general",
		title: "What is Kazar & Trust",
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
					"Kazar operates in partnership with Safe Haven Microfinance Bank, a CBN-licensed financial institution. Your funds are held in a regulated bank account — not on our servers, not in a digital wallet without backing. Every transaction is traceable, every movement is recorded, and no single party (including Kazar itself) can release funds without the correct conditions being met.",
			},
			{
				question: "Is Kazar regulated?",
				answer:
					"Kazar operates within Nigeria's financial regulatory framework in partnership with Safe Haven MFB, which is licensed by the Central Bank of Nigeria (CBN). All KYC processes comply with CBN AML/CFT guidelines and NFIU requirements.",
			},
			{
				question: "Who is Kazar for?",
				answer:
					"Kazar is for anyone buying or selling goods of value in Nigeria — whether you're an individual selling a gadget, a small business owner, a social media vendor, or a buyer tired of getting defrauded on online marketplaces.",
			},
			{
				question: "Is Kazar a bank?",
				answer:
					"No. Kazar is an escrow and deal management platform, not a bank. We partner with Safe Haven MFB (a CBN-licensed bank) to handle the actual custody of funds. Your money sits in a regulated bank account, not in Kazar's pocket.",
			},
			{
				question: "What makes Kazar different from paying someone directly?",
				answer:
					"When you pay someone directly, you have zero recourse if they disappear or send the wrong item. With Kazar, the seller only receives money after you confirm delivery or after an inspection window closes. The entire deal — terms, timeline, shipping, disputes — is documented and enforced on the platform.",
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
					"Your Bank Verification Number (BVN) is a unique identity number issued by the CBN that ties you to your bank records. This is not optional — it is a regulatory requirement under CBN AML/CFT guidelines, and it protects every other user on the platform from transacting with anonymous or fraudulent accounts.",
			},
			{
				question: "What information does Kazar store from my BVN verification?",
				answer:
					"We use your BVN to verify your identity and create your Kazar wallet sub-account with Safe Haven MFB. We do not display your raw BVN number in the app or share it with other users. It is stored securely and accessed only by authorised systems for compliance purposes.",
			},
			{
				question: "What is a Kazar wallet sub-account?",
				answer:
					"When you complete Tier 2 activation, Kazar automatically creates a unique bank sub-account for you through Safe Haven MFB. This sub-account has its own account number, and it's the account you fund when you want to pay for a deal.",
			},
			{
				question: "Can I use Kazar without completing BVN verification?",
				answer:
					"You can browse the platform and receive deal invitations at Tier 1, but you cannot create deals, accept deals, or make payments without completing BVN verification (Tier 2).",
			},
			{
				question: "What is the difference between Tier 2 and Tier 3 accounts?",
				answer:
					"Tier 2 — Verified with BVN and a linked withdrawal account. You can create and participate in deals up to ₦200,000 per deal. Tier 3 — Enhanced verification for deals above ₦200,000, as either a Personal or Business account. There is no upper limit on deal value at Tier 3.",
			},
			{
				question: "How do I upgrade to Tier 3?",
				answer:
					'Go to your profile settings and select "Upgrade Account." Choose your track — Personal or Business — provide the required documents, and our compliance team will review your application within 3–5 business days.',
			},
			{
				question: "What documents are needed for Tier 3 Personal upgrade?",
				answer:
					"You'll need your NIN slip, a valid government-issued ID, proof of address not older than 90 days, a selfie/liveness check, and a source of funds declaration.",
			},
			{
				question: "What documents are needed for Tier 3 Business upgrade?",
				answer:
					"CAC Certificate of Incorporation, CAC Status Report, FIRS Tax Identification Number certificate, Memorandum and Articles of Association (MEMART), business address proof, and a director's government-issued ID.",
			},
			{
				question: "Can I have more than one Kazar account?",
				answer:
					"No. One account per person. Your BVN is tied to a single account and the system enforces this. Attempting to create multiple accounts is a violation of our terms.",
			},
			{
				question: "How do I add or change my withdrawal bank account?",
				answer:
					"Go to your profile settings and update your withdrawal details. Note that for security reasons, there is a cooling period after changing withdrawal details before you can initiate a withdrawal.",
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
					"The seller creates the deal and invites the buyer by email or phone number, setting the product details, price, delivery timeline, inspection window, and who pays the escrow fee.",
			},
			{
				question: "What information is captured in a deal?",
				answer:
					"Every deal captures: product name, category, condition, quantity, brand, model, price, delivery timeline, delivery type, inspection window duration, escrow fee arrangement, and a full description. These terms are hashed at creation.",
			},
			{
				question: "Can I invite someone who is not yet on Kazar?",
				answer:
					"Yes. You can invite a buyer using their phone number or email even if they're not yet registered. They'll receive an invitation and be prompted to create and verify their account before accepting.",
			},
			{
				question: "How long does a deal invitation last?",
				answer:
					"Deal invitations expire after 72 hours. If the buyer doesn't respond within that window, the deal automatically expires.",
			},
			{
				question: "Can the buyer negotiate the deal terms?",
				answer:
					"Yes. The buyer can request changes to price, description, delivery timeline, inspection window, delivery type, quantity, condition, brand, or model — up to 3 negotiation rounds.",
			},
			{
				question:
					"Can the seller change the deal terms after the buyer has accepted?",
				answer:
					"No. Once accepted, terms are locked and cryptographically hashed. Any attempt to modify terms after acceptance is detected and rejected by the system.",
			},
			{
				question: "Can a deal be cancelled?",
				answer:
					"Before payment, either party can cancel with a stated reason and no funds move. After payment, the buyer cannot unilaterally cancel — they must confirm delivery, raise a dispute, or contact support. Cancellation at this stage requires admin involvement.",
			},
			{
				question:
					"What happens if I accidentally create a deal with the wrong details?",
				answer:
					"Cancel the deal before the buyer accepts it — no harm done. If they've already accepted and paid, you'll need to contact Kazar support.",
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
					"After the buyer accepts the deal terms, they have 24 hours to fund the escrow. The exact deal amount (including fees) is debited from their wallet into the escrow holding account, and the seller is notified to ship.",
			},
			{
				question: "How do I fund my Kazar wallet?",
				answer:
					"Transfer money to your unique Kazar wallet sub-account number, issued by Safe Haven MFB. Transfers can come from any Nigerian bank, and your balance updates automatically.",
			},
			{
				question: "What is the escrow fee and who pays it?",
				answer:
					"Kazar's service charge for securing and managing the transaction. The exact percentage is calculated based on the deal amount. You and the other party decide who pays it — Buyer pays, Seller pays, or Split equally.",
			},
			{
				question: "Can I see the full fee breakdown before paying?",
				answer:
					"Yes. The deal summary shows the product price, escrow fee, and total amount due clearly before the buyer makes any payment. There are no hidden charges.",
			},
			{
				question: "What happens to my money while it's in escrow?",
				answer:
					"Your funds are held in Kazar's designated holding account at Safe Haven MFB. The money is ring-fenced and stays frozen until delivery is confirmed, the inspection window expires, or a dispute is resolved.",
			},
			{
				question: "What if I don't have enough in my wallet to pay for a deal?",
				answer:
					"You'll need to top up your wallet before attempting payment. The payment window is 24 hours from accepting the deal — if you don't fund escrow within that window, the deal expires.",
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
					"The seller is responsible for shipping the item within the agreed delivery timeline (plus a 48-hour grace period), and must upload a valid tracking number and courier name after dispatch.",
			},
			{
				question: "What delivery types does Kazar support?",
				answer:
					"Same-City (3 business day transit window) and Interstate (7 business day transit window). The seller declares the delivery type when creating the deal.",
			},
			{
				question:
					"What happens if the seller doesn't ship within the agreed timeline?",
				answer:
					"The deal is automatically marked as Seller Defaulted and a full refund is initiated to the buyer — no negotiation, no extension.",
			},
			{
				question:
					"What happens if my item hasn't arrived after the transit window?",
				answer:
					"The deal is flagged as Flagged Transit and enters admin investigation. Kazar's team will contact the courier, review tracking, and either confirm delivery, confirm loss and refund, or escalate to a formal dispute.",
			},
			{
				question: "What should I do when I receive the item?",
				answer:
					"Log into your Kazar account and mark the item as delivered — this starts your inspection window. Don't mark it delivered before you've physically received and verified the item.",
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
					"The period after you mark an item as delivered during which you can examine it and either confirm satisfaction or raise a dispute — set at deal creation as 48 or 72 hours.",
			},
			{
				question: "What can I do during the inspection window?",
				answer:
					"Confirm delivery (funds release immediately to the seller) or raise a dispute (funds stay frozen and a formal dispute process begins).",
			},
			{
				question: "What happens if I don't act within the inspection window?",
				answer:
					"Delivery is automatically confirmed and funds are released to the seller. The inspection window is your protected opportunity to raise issues — if you miss it, the deal closes in the seller's favour.",
			},
			{
				question:
					"Can I raise a dispute before the item is marked as delivered?",
				answer:
					"Yes. If you believe there's a problem while the item is still in transit, you can raise a dispute from the Shipped status — the system automatically transitions the deal through the correct states.",
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
					"Item Not As Described, Item Not Received, Item Damaged, Wrong Item Sent, Incomplete Order, or Other.",
			},
			{
				question: "How do I raise a dispute?",
				answer:
					'During your inspection window, select "Raise a Dispute," choose a category, describe the issue, upload evidence (up to 5 photos or documents), and specify your desired resolution.',
			},
			{
				question: "What happens after I raise a dispute?",
				answer:
					"Your funds remain frozen. The seller has 24 hours to respond with evidence. If they fail to respond, the decision automatically goes in your favour and a refund is initiated. If they respond, a Kazar compliance officer reviews both sides.",
			},
			{
				question: "What resolution options are available in a dispute?",
				answer:
					"Full Refund, Partial Refund (an agreed split), or Replacement. The final decision is made by Kazar's team after reviewing all evidence — it is binding.",
			},
			{
				question: "Can the seller see my dispute evidence?",
				answer:
					"The seller sees your dispute category, description, and the count of evidence items submitted, then submits their own evidence. Kazar's team reviews both sides independently.",
			},
			{
				question: "How long does dispute resolution take?",
				answer:
					"The seller has 24 hours to respond. Once both sides have submitted their case, our compliance team aims to issue a resolution within 3–5 business days.",
			},
			{
				question: "Can I appeal a dispute decision?",
				answer:
					"Dispute decisions are binding. If you believe there was a material error, you can contact Kazar support with new evidence — overturning a decided dispute requires substantial grounds.",
			},
			{
				question: "What if the seller agrees to refund me voluntarily?",
				answer:
					"Kazar's team will still formally close the dispute and process the refund through the platform — no side deals or off-platform payments are accepted.",
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
					"When the buyer confirms delivery, the inspection window expires without action, or Kazar's team rules in the seller's favour after a dispute.",
			},
			{
				question:
					"How long does it take for the seller to receive payment after release?",
				answer:
					"Settlement is processed via interbank transfer and typically arrives within minutes to a few hours depending on interbank processing times.",
			},
			{
				question: "How do I withdraw my wallet balance?",
				answer:
					"Go to your wallet section, select Withdraw, confirm your registered bank account details, and submit — then authorise the withdrawal through your configured authentication method.",
			},
			{
				question: "Are there withdrawal limits?",
				answer:
					"Withdrawal limits are tied to your account tier and subject to CBN-regulated transaction limits. You can view your current limits in your profile.",
			},
			{
				question: "What happens to the escrow fee if the deal falls through?",
				answer:
					"If cancelled before payment, no fee is charged at all. If cancelled after escrow is funded, Kazar's escrow fee is non-refundable, since the work of securing and managing the transaction has already been performed. What you get back is the deal amount minus the escrow fee — clearly shown before you ever pay.",
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
					"Every user is BVN-verified — no anonymity on Kazar. Every deal has a cryptographic hash of its terms. Funds go into escrow, not to the seller directly. Every transaction is recorded in an immutable audit trail.",
			},
			{
				question: "What if the seller tries to send me something worthless?",
				answer:
					"That's exactly what the inspection window and dispute system are for. Don't confirm delivery until you've properly inspected the item — raise a dispute with photo evidence if something's wrong.",
			},
			{
				question:
					"What if a buyer tries to falsely claim they didn't receive an item?",
				answer:
					"The seller's protection is the tracking number. A seller with valid tracking evidence showing confirmed delivery is in a strong position — Kazar's team reviews all evidence before deciding.",
			},
			{
				question:
					"What happens if I suspect fraudulent activity on my account?",
				answer:
					"Contact Kazar support immediately. Never share your OTP, password, or authentication codes — Kazar will never ask for your OTP over the phone, email, or DM.",
			},
			{
				question: "Does Kazar comply with anti-money laundering laws?",
				answer:
					"Yes — fully. Kazar is registered and compliant with SCUML under the Money Laundering (Prevention and Prohibition) Act 2022, and operates under CBN AML/CFT guidelines and FATF recommendations. Every account is KYC-verified via BVN, transactions are monitored for suspicious activity, and STRs are filed with NFIU where required. High-value transactions and Tier 3 upgrades undergo Enhanced Due Diligence.",
			},
			{
				question: "Can my account be blocked?",
				answer:
					"Yes. Accounts that violate our terms, are flagged for suspicious activity, or are involved in fraud can be blocked by our compliance team. Legitimate users who believe this happened in error can contact support.",
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
					"Verify your wallet has sufficient balance including fees, and that your payment window hasn't expired (24 hours from accepting). If the problem persists, contact support with your deal ID.",
			},
			{
				question: "Can I use Kazar without the app?",
				answer:
					"Yes. Kazar is accessible via web browser with full functionality on both web and mobile.",
			},
			{
				question: "Is my data safe with Kazar?",
				answer:
					"Kazar complies with the NDPA. Your personal information is encrypted, access-controlled, and never sold to third parties. You can request deletion, subject to a 7-year financial record retention requirement under CBN regulations.",
			},
			{
				question: "What do I do if I forget my password?",
				answer:
					'Use "Forgot Password" on the login screen — you\'ll receive an OTP to your registered email or phone to verify your identity and set a new password.',
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
					"In-app support tickets, email at support@kazar.com, Instagram DM @kazarescrow, or Live Chat on the web app during business hours.",
			},
			{
				question: "What information should I include when contacting support?",
				answer:
					"Your registered email address, deal ID (if relevant), a clear description of the problem, and any relevant screenshots — this speeds up resolution significantly.",
			},
			{
				question: "What are Kazar's support hours?",
				answer:
					"Monday to Friday, 8am – 6pm WAT, and Saturday 9am – 2pm WAT. Critical issues (frozen funds, security breaches) are monitored 24/7.",
			},
			{
				question: "How long does it take to get a support response?",
				answer:
					"In-app tickets are typically responded to within 2–4 business hours. Complex or compliance-related matters may take longer, and you can track your ticket status in the app.",
			},
		],
	},
];
