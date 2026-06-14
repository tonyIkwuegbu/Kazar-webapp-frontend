import axios, {
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
	AxiosRequestConfig,
} from "axios";

const USER_EMAIL_KEY = "_user_email";

class RequestService {
	axiosClient: AxiosInstance;

	constructor() {
		this.axiosClient = axios.create({
			timeout: 30000,
			withCredentials: true,
		});

		this.axiosClient.interceptors.request.use(
			this.requestInterceptor.bind(this),
			this.errorHandler.bind(this),
		);
		this.axiosClient.interceptors.response.use(
			this.responseInterceptor.bind(this),
			this.errorHandler.bind(this),
		);
	}

	/** Reads the logged-in user's email directly from localStorage, if present. */
	private getUserEmail(): string | null {
		if (typeof window === "undefined") return null;
		return localStorage.getItem(USER_EMAIL_KEY);
	}

	private async requestInterceptor(
		config: InternalAxiosRequestConfig,
	): Promise<InternalAxiosRequestConfig> {
		// Pass email so proxy can generate signature server-side.
		// If absent (e.g. anonymous waitlist requests), the proxy falls
		// back to a guest identity.
		const email = this.getUserEmail();
		if (email) {
			config.headers.set("x-user-email", email);
		}

		if (config.data instanceof FormData) {
			config.headers.delete("Content-Type");
		} else if (!config.headers.get("Content-Type")) {
			config.headers.set("Content-Type", "application/json");
		}

		return config;
	}

	private async responseInterceptor(response: AxiosResponse): Promise<any> {
		return response?.data;
	}

	private async errorHandler(error: any): Promise<never> {
		if (axios.isCancel(error)) {
			return Promise.reject({
				message: "Request was cancelled. Please try again.",
				statusCode: 0,
			});
		}
		if (error?.response?.data) {
			return Promise.reject({
				...error.response.data,
				statusCode: error.response.status,
			});
		}
		return Promise.reject({
			message: error?.message || "Unable to perform request.",
			statusCode: error?.response?.status || 1000,
		});
	}

	async post<TResponse = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig,
	): Promise<TResponse> {
		return this.axiosClient.post(
			`/api/proxy?endpoint=${encodeURIComponent(url)}`,
			data,
			config,
		);
	}

	async get<TResponse = any>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<TResponse> {
		return this.axiosClient.get(
			`/api/proxy?endpoint=${encodeURIComponent(url)}`,
			config,
		);
	}

	async put<TResponse = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig,
	): Promise<TResponse> {
		return this.axiosClient.put(
			`/api/proxy?endpoint=${encodeURIComponent(url)}`,
			data,
			config,
		);
	}

	async delete<TResponse = any>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<TResponse> {
		return this.axiosClient.delete(
			`/api/proxy?endpoint=${encodeURIComponent(url)}`,
			config,
		);
	}

	async patch<TResponse = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig,
	): Promise<TResponse> {
		return this.axiosClient.patch(
			`/api/proxy?endpoint=${encodeURIComponent(url)}`,
			data,
			config,
		);
	}
}

const requestService = new RequestService();
export default requestService;
