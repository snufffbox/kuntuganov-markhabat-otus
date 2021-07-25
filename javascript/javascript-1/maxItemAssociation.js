function maxItemAssociation(purchases) {
  let recommendations = [];

	if (purchases.length === 0)
    return null;

  for (let purchase of purchases) {
		if (!recommendations.length) {
      recommendations.push(new Set(purchase));
    }
		else {
			let isIntersected = false;

			for (let rec of recommendations) {
				for (let pur of purchase) {
					if (rec.has(pur)) {
						purchase.forEach(pur => { rec.add(pur); });

						isIntersected = true;

						break;
					};
				};
			};

			if (!isIntersected) {
				recommendations.push(new Set(purchase));
			};
		};
	};

	recommendations = recommendations.map(item => [...item].sort()).sort();

	let maxRecLength = 0;
  let maxRecPos;

	recommendations.forEach((item, index) => {
		if (recommendations[index].length > maxRecLength) {
			maxRecLength = recommendations[index].length;
			maxRecPos = index;
		};
	});

	return recommendations[maxRecPos];
};

let purchasesList = [
	["a", "b"],
	["a", "c"],
	["d", "e"],
];

maxItemAssociation(purchasesList);