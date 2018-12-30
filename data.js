module.exports = function()
{
	let res = 
	{
		products: 
		[
			{
				id: 1, name: "DF well fit", category: "Леска", description: "Летняя леска", 
				price: 55, img: "src/app/img/DF-LINE-WFS23-100.png"
			},
			{
				id: 2, name: "DF ultra light", category: "Леска", description: "Спининговая леска",
				price: 75, img: "src/app/img/DF-LINE-UL014-100.png"
			},
			{
				id: 3, name: "TS Black Arrow", category: "Удилище", description: "Офигеть спининг",
				price: 3160, img: "src/app/img/TS-BA-10-M.png"
			},
			{
				id: 4, name: "TS North South", category: "Удилище", description: "Крутой спининг",
				price: 1743, img: "src/app/img/TS-NS-9-M.png"
			},
			{
				id: 5, name: "ВА Well Fit Heavy", category: "Удилище", description: "Офигеть фидер",
				price: 2761, img: "src/app/img/DF-SBL-GN-20LB-150.png"
			}
		],
		orders: []
	};

	return(res);
}