export function getHeaderTitle(route: String) {
    switch (route) {
        case "(tabs)":
            return "Home";
        case "cart":
            return "Cart";
        case "favourites":
            return "Favourites";
        case "orders":
            return "Orders";
    }
}
