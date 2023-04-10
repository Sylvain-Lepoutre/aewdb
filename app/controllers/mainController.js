import wrestlers from "../data/wrestlers.js";
import championships from "../data/championship.js";
import { log, error, test } from "../function/chalk.js";

const mainController = {
    home: function(req, res) {
        // console.log(wrestlers);
        // Je veux filtrer les wrestlers pour garder ceux qui ont un titre de champion
        const homeWrestlers = wrestlers.filter(wrestler => wrestler.championship.length > 0);

        // res.send('ok');
        res.render('home', { 
            wrestlers: homeWrestlers,
        });
    }
}

export default mainController;