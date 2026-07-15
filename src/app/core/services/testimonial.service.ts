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

// ── In-memory cache ───────────────────────────────────────────────────────
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const cache = new Map<
	string,
	{ data: PublicTestimonial[]; timestamp: number }
>();

function cacheKey(params: Required<FetchTestimonialsParams>): string {
	return JSON.stringify(params);
}

class PublicTestimonialService {
	async fetchPublic(
		params: FetchTestimonialsParams = {},
	): Promise<PublicTestimonial[]> {
		const { skip = 0, limit = 5, rating, minRating } = params;

		const key = cacheKey({
			skip,
			limit,
			rating: rating ?? -1,
			minRating: minRating ?? -1,
		});
		const cached = cache.get(key);

		if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
			return cached.data;
		}

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
				const testimonials = res.data.testimonials;
				cache.set(key, { data: testimonials, timestamp: Date.now() });
				return testimonials;
			}
			return [];
		} catch {
			return [];
		}
	}
}

const publicTestimonialService = new PublicTestimonialService();
export default publicTestimonialService;
