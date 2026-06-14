/**
 * Generates a unique request ID
 * Format: YYYYMMDDHHMMSS + 10 random alphanumeric characters (Africa/Lagos timezone)
 */
export const generateRequestId = (): string => {
	// Get current date/time in Africa/Lagos timezone
	const now = new Date();
	const lagosTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Africa/Lagos" }),
	);

	const year = lagosTime.getFullYear();
	const month = String(lagosTime.getMonth() + 1).padStart(2, "0");
	const day = String(lagosTime.getDate()).padStart(2, "0");
	const hours = String(lagosTime.getHours()).padStart(2, "0");
	const minutes = String(lagosTime.getMinutes()).padStart(2, "0");
	const seconds = String(lagosTime.getSeconds()).padStart(2, "0");

	const timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`;

	// Generate 10 random alphanumeric characters
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let randomChars = "";
	for (let i = 0; i < 10; i++) {
		randomChars += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return `${timestamp}${randomChars}`;
};
