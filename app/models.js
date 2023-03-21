import slugify from "slugify";

let idCounter = 0;

class Wrestler {
    name;
    slug;
    record;
    championship;



    constructor(name) {
        this.name = name;
        const slug = slugify(name, {
            lower: true
        });
        this.slug = slug;
        this.record = {
            single: {
                win: 0,
                loss: 0
            },
            tag: {
                win: 0,
                loss: 0
            },
            trios: {
                win: 0,
                loss: 0
            },
        };
        this.championship = '';
    }
}

export default Wrestler;