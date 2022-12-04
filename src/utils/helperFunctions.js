export const formatString = (string) => {
	if (!string) return;
	let removedUnderscore = string.replaceAll('_', ' ');
	return removedUnderscore.charAt(0).toUpperCase() + removedUnderscore.slice(1);
};
