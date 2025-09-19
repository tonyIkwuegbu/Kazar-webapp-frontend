"use client";
import React from "react";
import { Form, Input, Checkbox, message } from "antd";
import Image from "next/image";
import { ContactImage } from "@/assets";
import Button from "../elements/Button";
import { handleNumericInputKeyDown } from "@/utils/helpers/handleNumericInput";

const { TextArea } = Input;

interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
	privacyAccepted: boolean;
}

interface ContactFormProps {
	className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async (values: ContactFormData) => {
		setLoading(true);
		try {
			console.log("Form submitted:", values);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			message.success("Message sent successfully!");
			form.resetFields();
		} catch (error) {
			message.error("Failed to send message. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${className}`}
		>
			<div className="container mx-auto px-4 2xsm:px-6 xsm:px-8 relative z-10">
				<div className="max-w-8xl mx-auto">
					<div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
						<div className="absolute inset-0 z-0">
							<Image
								src={ContactImage}
								alt="Contact background"
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="relative z-10 px-6 py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
							<div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
								<div className="flex-1 text-white lg:pr-8 mt-10 lg:mt-0">
									<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
										Give us a shout for
										<br />
										more information?
									</h2>
									<p className="text-lg md:text-xl opacity-90 max-w-2xl">
										Have questions or need assistance? Reach out to us for more
										information!
									</p>
								</div>

								<div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
									<div
										className="
                bg-white rounded-2xl p-6 lg:p-8
                border border-bodydark1/10 
                shadow-4 hover:shadow-6
                transition-all duration-300
              "
									>
										<Form
											form={form}
											layout="vertical"
											onFinish={handleSubmit}
											requiredMark={false}
											className="space-y-4 lg:space-y-6"
										>
											<Form.Item
												name="name"
												rules={[
													{ required: true, message: "Please enter your name" },
													{
														min: 2,
														message: "Name must be at least 2 characters",
													},
												]}
											>
												<Input
													placeholder="John Smith"
													size="large"
													className="h-12 rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
													style={{
														fontSize: "16px",
														backgroundColor: "#f8f9fa",
													}}
												/>
											</Form.Item>

											<Form.Item
												name="email"
												rules={[
													{
														required: true,
														message: "Please enter your email",
													},
													{
														type: "email",
														message: "Please enter a valid email",
													},
												]}
											>
												<Input
													placeholder="Email Address"
													size="large"
													className="h-12 rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
													style={{
														fontSize: "16px",
														backgroundColor: "#f8f9fa",
													}}
												/>
											</Form.Item>

											<Form.Item
												name="phone"
												rules={[
													{
														required: true,
														message: "Please enter your phone number",
													},
												]}
											>
												<Input
													placeholder="Phone Number"
													size="large"
													className="h-12 rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
													style={{
														fontSize: "16px",
														backgroundColor: "#f8f9fa",
													}}
													onKeyDown={(e) => handleNumericInputKeyDown(e)}
												/>
											</Form.Item>

											<Form.Item
												name="message"
												rules={[
													{
														required: true,
														message: "Please enter your message",
													},
													{
														min: 10,
														message: "Message must be at least 10 characters",
													},
												]}
											>
												<TextArea
													placeholder="Message"
													rows={4}
													spellCheck
													className="rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
													style={{
														fontSize: "16px",
														backgroundColor: "#f8f9fa",
													}}
												/>
											</Form.Item>

											<Form.Item
												name="privacyAccepted"
												valuePropName="checked"
												rules={[
													{
														validator: (_, value) =>
															value
																? Promise.resolve()
																: Promise.reject(
																		"You must accept the privacy policy",
																  ),
													},
												]}
												className="mb-6"
											>
												<Checkbox className="text-sm lg:text-base text-bodydark2">
													I have read and accept the privacy policy.
												</Checkbox>
											</Form.Item>

											<Form.Item className="mb-0">
												<Button
													label={loading ? "Sending..." : "Send Message"}
													className="w-full h-14 bg-primary hover:bg-primary/90 border-primary hover:border-primary/90 rounded-lg font-medium text-base shadow-2"
												/>
											</Form.Item>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
