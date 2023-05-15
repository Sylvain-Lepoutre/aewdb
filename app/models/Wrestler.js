import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';
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
        unique: true,
        set(value) {
            this.setDataValue('slug', slugify(value, { lower: true, remove: /['"]/g }))
            this.setDataValue('name', value)
        },
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
    }
}, {
    sequelize,
    modelName: 'Wrestler',
    tableName: 'wrestler',
    hooks: {
        beforeValidate: (wrestler) => {
            wrestler.slug = slugify(wrestler.name, { lower: true, remove: /['"]/g });
        },
    //     beforeUpdate: (wrestler) => {
    //         wrestler.slug = slugify(wrestler.name, { lower: true, remove: /['"]/g });
    //     }
    }
});

export default Wrestler;