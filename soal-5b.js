let data = {
    id: 1,
    name: "Lionel Messi",
    username: "lionel_messi30",
    email: "lionel_messi30@gmail.com",
    address: {
        street: "jl.Gorontalo no.77",
        suite: "Apt.556",
        city: "London",
        zipcode: "89853-3262"
    },
    phone: "32-9373285927",
    website: "jagoweb.id"
};

// Mengambil data street dan city menggunakan destructuring
let {address: {street, city}} = data;
console.log(street);
console.log(city);
