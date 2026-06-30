import requestService from "./request.service";

export interface PublicTestimonial {
	testimonialId: string;
	firstName: string;
	profilePicture?: string | null;
	testimonialText: string;
	rating: number;
	badgeLevel: string;
	completedDealsBand: string;
	memberSinceYear: number;
	approvedAt: string;
	status: string;
}

interface PublicTestimonialsResponse {
	data: {
		testimonials: PublicTestimonial[];
		total: number;
		limit: number;
		skip: number;
		stats: {
			avgRating: number;
			totalCount: number;
			fiveStars: number;
		};
	};
	message: string;
	responseCode: string;
	status: "success" | "error";
	statusCode: number;
}

interface FetchTestimonialsParams {
	skip?: number;
	limit?: number;
	rating?: number;
	minRating?: number;
}

class PublicTestimonialService {
	async fetchPublic(
		params: FetchTestimonialsParams = {},
	): Promise<PublicTestimonial[]> {
		const { skip = 0, limit = 5, rating, minRating = 5 } = params;

		const query = new URLSearchParams({
			skip: String(skip),
			limit: String(limit),
		});

		if (rating !== undefined) {
			query.set("rating", String(rating));
		} else if (minRating !== undefined) {
			query.set("minRating", String(minRating));
		}

		try {
			const res = await requestService.get<PublicTestimonialsResponse>(
				`/testimonial/public?${query.toString()}`,
			);

			if (res?.status === "success" && Array.isArray(res.data?.testimonials)) {
				return res.data.testimonials;
			}
			return [];
		} catch {
			return [];
		}
	}
}

const publicTestimonialService = new PublicTestimonialService();
export default publicTestimonialService;
