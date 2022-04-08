function Object() {
	let data = {
		nama : "bob",
		kelas : 9,
		umur : 17,
		tinggi : 190,
		berat : 42
	}

	console.log(data);

	for (var x in data) {
		console.log(data[x]);
	}
}

Object()