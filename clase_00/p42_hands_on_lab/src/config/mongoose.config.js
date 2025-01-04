import { connect, Types } from "mongoose";

const connectDB = async () => {
    const URI = "mongodb+srv://tuUsuario:tuClave@tuCluster.mongodb.net";

    try {
        connect(URI, { dbName: "class-zero" });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB", error.message);
    }
};

const isValidID = (id) => {
    return Types.ObjectId.isValid(id);
};

export default {
    connectDB,
    isValidID,
};