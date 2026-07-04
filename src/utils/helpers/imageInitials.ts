export const getFirstNameInitial = (name?: string): string => {
	return name?.trim()?.charAt(0)?.toUpperCase() || "?";
};
