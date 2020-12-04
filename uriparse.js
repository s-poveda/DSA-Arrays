function URIparse(str) {
	const words = str.split(' ');
	return words.join('%20');
}
console.log(URIparse('tauhida parveen'));
console.log(URIparse('www.thinkful.com /tauh ida parv een'));
