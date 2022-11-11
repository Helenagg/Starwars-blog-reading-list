const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favs: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			addFavorite: (e) => {				
				const store = getStore();
				const resultFav = store.favs.concat(e);
				setStore({favs: resultFav});
			}, 

			deleteFav: (index) => {
				const store = getStore();
				//const resultDelete = store.arrFav.filter((i, index, arrFav) => i!==index);
				setStore({favs: store.favs.filter((fav, i, arr) => i !==index)});
				console.log(favs);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
