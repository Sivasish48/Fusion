import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"
const test = (req, res) => {
    res.json({ message: "API is working" });
}

const updateUser = async (req, res, next) => {
    const { userId } = req.params;
    const { username, email, password } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = bcryptjs.hashSync(password, 10);

        await user.save();

        res.json({ message: "User updated successfully", user });
    } catch (error) {
        next(error);
    }
};

export { test, updateUser };
