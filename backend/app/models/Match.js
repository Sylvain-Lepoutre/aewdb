import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';

class Match extends Model { }

Match.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stipulation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: true
        },
        winner: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize,
        modelName: 'Match',
        tableName: 'match'
    }
);

export default Match;