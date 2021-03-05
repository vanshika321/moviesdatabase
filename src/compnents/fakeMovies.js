const movies =[{
    _id:"598t589kjflfd124",
    title:"Terminator",
    genre:{_id:"598t589kjflfd128", name:"Action"},
    numberInStock:6,
    dsilyDentalRate:2.5,
    publishDate:"2018-01-03T19:04:28.809Z",
     
},
{
    _id:"598t589kjflfd125",
    title:"bbt",
    genre:{_id:"598t589kjflfd128", name:"Action"},
    numberInStock:4,
    dsilyDentalRate:3.5,
    publishDate:"2019-01-03T19:04:28.809Z",
},
{
    _id:"598t589kjflfd126",
    title:"broklyn 99",
    genre:{_id:"598t589kjflfd138", name:"Comedy"},
    numberInStock:1,
    dsilyDentalRate :5,
    publishDate:"2017-01-03T19:04:28.809Z",
},
{

    _id:"598t589kjflfd127",
    title:"Young Sheldon",
    genre:{_id:"598t589kjflfd138", name:"Comedy"},
    numberInStock:6,
    dsilyDentalRate:2.5,
    publishDate:"2018-02-03T19:04:28.809Z",
},
{
    _id:"598t589kjflfd128",
    title:"Shawshank redemption",
    genre:{_id:"598t589kjflfd148", name:"Thiller"},
    numberInStock:2,
    dsilyDentalRate:5,
    publishDate:"2018-03-03T19:04:28.809Z",
},
{

    _id:"598t589kjflfd129",
    title:"Wazir",
    genre:{_id:"598t589kjflfd148", name:"Thiller"},
    numberInStock:9,
    dsilyDentalRate:4.25,
    publishDate:"2018-04-03T19:04:28.809Z",
},
{

    _id:"598t589kjflfd130",
    title:"That girl",
    genre:{_id:"598t589kjflfd158", name:"Romantic"},
    numberInStock:6,
    dsilyDentalRate:2.5,
    publishDate:"2018-05-03T19:04:28.809Z",
},
{
    _id:"598t589kjflfd131",
    title:"Notebook",
    genre:{_id:"598t589kjflfd158", name:"Romantic"},
    numberInStock:6,
    dsilyDentalRate:2.5,
    publishDate:"2018-06-03T19:04:28.809Z",
},
{
    _id:"598t589kjflfd132",
    title:"Friends",
    genre:{_id:"598t589kjflfd138", name:"Comedy"},
    numberInStock:6,
    dsilyDentalRate:2.5,
    publishDate:"2018-07-03T19:04:28.809Z",
}]
 export function getMovies(){
    return movies
};
export function getMovie(id){
    return movies.find(m=>m._id===id)
}