module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", {
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            address_id: DataTypes.STRING,
            cns: DataTypes.INTEGER,
            mother_name: DataTypes.STRING,
            birth_date: DataTypes.DATE,
            phone_number: DataTypes.STRING,
            gender: DataTypes.STRING,
            ethnicity: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                name: "created_at",
                field: "created_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                name: "updated_at",
                field: "updated_at"
            },
        }, {
            tableName: "tbl_users",
            timestamps: true,
        }
    );
    // User.associate = (models) => {
    //     User.belongs(models.address_id, { foreIgnKey: "adress_id" });
    // }
    return User;
}