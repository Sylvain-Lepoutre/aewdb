import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';

import Wrestler from './Wrestler.js';
import Championship from './Championship.js';


class Wrestler_has_Championship extends Model { }

Wrestler_has_Championship.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    wrestlerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    championshipId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Wrestler_has_Championship',
    tableName: 'wrestler_has_championship',
});

Wrestler.belongsToMany(Championship, { through: Wrestler_has_Championship });
Championship.belongsToMany(Wrestler, { through: Wrestler_has_Championship });

Wrestler_has_Championship.belongsTo(Wrestler);
Wrestler.hasMany(Wrestler_has_Championship);

Wrestler_has_Championship.belongsTo(Championship);
Championship.hasMany(Wrestler_has_Championship);

export default Wrestler_has_Championship;