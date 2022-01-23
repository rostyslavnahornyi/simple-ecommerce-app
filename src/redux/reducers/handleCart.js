const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type) {
        case "ADD_ITEM":
            const exist1 = state.find((item) => item.id === product.id);
            if (exist1) {
                return state.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                )
            } else {
                const product = action.payload;
                return [
                    ...state, {...product, quantity: 1}
                ]
            }
            break;

        case "DEL_ITEM":
            const exist2 = state.find((item) => item.id === product.id);
            if (exist2.quantity === 1) {
                return state.filter((item) => item.id !== exist2.id);
            } else {
                return state.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity - 1} : item
                )
            }
            break;

        default:
            return state;
            break;
    }
}

export default handleCart;