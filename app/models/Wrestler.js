import { DataTypes, Model } from 'sequelize';
import sequelize from '../databse.js';
import slugify from 'slugify';

class Wrestler extends Model { }

Wrestler.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: 'Wrestler',
    tableName: 'wrestler',
    hooks: {
        beforeValidate: (wrestler) => {
            wrestler.slug = slugify(wrestler.name, { lower: true, remove: /['"]/g });
        }
    }
});

export default Wrestler;