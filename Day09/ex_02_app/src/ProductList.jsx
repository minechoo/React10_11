const products = [
	{ id: 1, name: '노트북', price: 1000000 },
	{ id: 2, name: '스마트폰', price: 800000 },
	{ id: 3, name: '태블릿', price: 500000 },
];

let totalPrice = 0;
products.forEach((product) => {
	totalPrice += product.price;
});
export const ProductList = () => {
	return (
		<>
			<h1>상품 가격 계산</h1>
			<h2>상품목록</h2>
			<ul>
				{products.map(({ id, name, price }) => (
					<li key={id}>
						{name} : {price.toLocaleString()}원
					</li>
				))}
			</ul>
			<p>총 가격 : {totalPrice.toLocaleString()}원</p>
		</>
	);
};
