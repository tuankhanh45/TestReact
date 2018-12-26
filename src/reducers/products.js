var initialState = [
    {
        id:1,
        name:'ipx',
        price:400,
        status:true
    },
    {
        id:2,
        name:'ss7',
        price:300,
        status:true
    }
];
const products = ((state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
});
export default products;