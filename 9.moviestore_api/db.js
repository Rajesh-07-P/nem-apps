const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/movie"
    );
    console.log("connected to db");

} catch (err) {
    console.log("Connot connect");
    console.log(err);
}
};

main();


const movieSchema = mongoose.Schema({
    title: String,
    image: String,
    rating: Number,
    releaseYear: Number,
    genre: Object,
},{
    versionKey:false
});

const Moviemodel = mongoose.model("movie", movieSchema);

// Moviemodel.insertMany([
// {
//     title: "Dawn of the Planet of the Apes",
//     image: "http://api.androidhive.info/json/movies/1.jpg",
//     rating: 8.3,
//     releaseYear: 2014,
//     genre: ["Action", "Drama", "Sci-Fi"],
// },
// ]).then(() => {
//     console.log("added to db");
// });

module.exports = { Moviemodel };
