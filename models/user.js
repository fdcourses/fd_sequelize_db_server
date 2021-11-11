'use strict';

const {isBefore} = require('date-fns');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: 'userId'
      }); 
      User.hasMany(models.Post, {
        foreignKey: 'userId'
      });
      // UserGroup -> UserId, GroupId
      User.belongsToMany(models.Group, {
        through: 'users_to_groups',
        foreignKey: 'userId'
      }) 
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'first_name',
        validate: {
          notNull: true,
          notEmpty: true,
        }
      },
      lastName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'last_name',
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: 'password_hash',
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      birthday: { 
        type: DataTypes.DATEONLY, 
        allowNull: false,
        validate: {
          notNull: true,
          isDate: true,
          isValidDate(value) {
            if(isBefore(new Date(), new Date(value))) {
              throw new Error('Bad Birthday date');
            }
          }
        }
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        field: 'is_male',
        allowNull: false,
        validate : {
          notNull: true,
        }
      },
    },
    {
      sequelize,
      modelName: 'User',
      underscored: true,
      tableName: 'users'
    }
  );
  return User;
};
