export function getDataByLastDays(data: any, days: number) {
	const now = new Date();
	const lastDays = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

	return data.filter((item: any) => {
		const createdAt = new Date(item.createdAt);
		return createdAt >= lastDays && createdAt <= now;
	});
}

export function shortenString(longString: string) {
	if (longString.length <= 100) {
		return longString;
	} else {
		return longString.substring(0, 100) + "...";
	}
}
