const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,  //true previously
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],   
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
   images: {
      type: Array,
    }, 
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: ["Arena Blanco","Ayala","Baliwasan","Baluno","Boalan","Bolong","Buenavista","Bunguiao","Busay (Sacol Island)","Cabaluay","Cabatangan","Cacao","Calabasa","Calarian","Camino Nuevo","Campo Islam","Canelar","Capisan","Cawit","Culianan","Curuan","Dita","Divisoria","Dulian (Upper Bunguiao)","Dulian (Upper Pasonanca)","Guisao","Guiwan","Kasanyangan","La Paz","Labuan","Lamisahan","Landang Gua","Landang Laum","Lanzones","Lapakan","Latuan (Curuan)","Licomo","Limaong","Limpapa","Lubigan","Lumayang","Lumbangan","Lunzuran","Maasin","Malagutay","Mampang","Manalipa","Mangusu","Manicahan","Mariki","Mercedes","Muti","Pamucutan","Pangapuyan","Panubigan","Pasilmanta (Sacol Island)","Pasobolong","Pasonanca","Patalon","Putik","Quiniput","Recodo","Rio Hondo","Salaan","San Jose Cawa-cawa","San Jose Gusu","San Ramon","San Roque","Sangali","Santa Barbara","Santa Catalina","Santa Maria","Santo Niño","Sibulao (Caruan)","Sinubung","Sinunoc","Tagasilay","Taguiti","Talabaan","Talisayan","Talon-talon","Tetuan","Tictapul","Tigbalabag","Tigtabon","Tolosa","Tugbungan","Tulungatung","Tumalutab","Tumitus","Victoria","Vitali","Zambowood","Zone I (Poblacion)","Zone II (Poblacion)","Zone III (Poblacion)","Zone IV (Poblacion)"],
    },
    brand: {
      type: String,
      enum: ["Lady's Choice", "Magnolia", "Contadina", "Kikkoman", "Knorr","Del Monte","Silver Swan","Minola","NA","No Brand"],
    },

     seller: {
      type: String,
      trim: true,
      unique: true, 
    },
    ratings: [
     {
      star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
   ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);