import path from "path";

const paths = {
    root: path.dirname(""),
    src: path.join(path.dirname(""), "src"),
    public: path.join(path.dirname(""), "src", "public"),
    images: path.join(path.dirname(""), "src", "public", "images"),
    views: path.join(path.dirname(""), "src", "views"),
    sessions: path.join(path.dirname(""), "src", "sessions"),
};

export default paths;