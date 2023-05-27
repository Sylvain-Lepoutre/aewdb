import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';
import Wrestler from './Wrestler.js';
import Match from './Match.js';

class Wrestler_has_Match extends Model { }

Wrestler_has_Match.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        wrestlerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Wrestler,
                key: 'id',
            },
        },
        matchId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Match,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Wrestler_has_Match',
        tableName: 'wrestler_has_match',
    }
);

export default Wrestler_has_Match;
