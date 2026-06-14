import { WaitlistPayload } from "@/types/interface/waitlist.interface";
import requestService from "./request.service";

class WaitlistService {
	async addToWaitlist(payload: WaitlistPayload): Promise<any> {
		try {
			const response = await requestService.post("/waitlist/add", payload);
			return response;
		} catch (error: any) {
			const errorMessage =
				error.error ||
				error.response?.data?.error ||
				error.message ||
				"Failed to join the waitlist";
			throw new Error(errorMessage);
		}
	}
}

const waitlistService = new WaitlistService();
export default waitlistService;
