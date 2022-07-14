const menu = {
    burgerMenu: [
        {
            item: 'Burger',
            time: 2000,
        },
        {
            item: 'Cola',
            time: 500,
        },
        {
            item: 'Ff',
            time: 1000,
        },
    ],

    pizzaMenu: [
        {
            item: 'Pizza',
            time: 3000,
        },
        {
            item: 'Pepsi',
            time: 500,
        },
        {
            item: 'souse',
            time: 500,
        },
    ]
};

function createOrder(order, prepared) {
    const preparedOrder = [];

    const isEmpty = (arr) => {
        const empty = arr.findIndex((item) => !item);
        const notFoundIndex = -1;
        return (empty === notFoundIndex) ? false : true;
    };

    order.forEach((item, index) => {
        setTimeout(() => {
            preparedOrder[index] = `${item.item} done`;

            if (!isEmpty(preparedOrder)) {
                prepared(preparedOrder);
            }

        }, item.time);
    });
}

createOrder(menu.burgerMenu, (result) => alert(result));
createOrder(menu.pizzaMenu, (result) => alert(result));
