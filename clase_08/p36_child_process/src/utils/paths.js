import path from "path";

const paths = {
    root: path.dirname(""),
    env: {
        dev: path.join(path.dirname(""), ".env.dev"),
        prod: path.join(path.dirname(""), ".env.prod"),
    },
    src: path.join(path.dirname(""), "src"),
    public: path.join(path.dirname(""), "src", "public"),
    images: path.join(path.dirname(""), "src", "public", "images"),
    views: path.join(path.dirname(""), "src", "views"),
    forks: path.join(path.dirname(""), "src", "forks"),
};

export default paths;