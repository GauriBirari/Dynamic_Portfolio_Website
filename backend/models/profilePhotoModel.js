const mongoose = require("mongoose");

const profilePhotoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const ProfilePhoto = mongoose.model("profilephoto", profilePhotoSchema);
module.exports = ProfilePhoto;
