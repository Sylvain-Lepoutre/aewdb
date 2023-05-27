import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';
import slugify from 'slugify';

class Championship extends Model {}

Championship.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    maxHolder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 1
        }
    },
}, {
    sequelize,
    modelName: 'Championship',
    tableName: 'championship',
    hooks: {
        beforeValidate: (championship) => {
            championship.slug = slugify(championship.title, { lower: true, remove: /['"]/g });
        }
    }
});

export default Championship;
