import slugify from "slugify";

class Championship {
    #name;
    #slug;

    constructor(name) {
        this.name = name;
        this.slug = slugify(name, { lower: true, strict: true });
    }

    get name() {
        return this.#name;
    }

    get slug() {
        return this.#slug;
    }

    set name(name) {
        this.#name = name;
    }

    set slug(slug) {
        this.#slug = slug;
    }
}

export default Championship;