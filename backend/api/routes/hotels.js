import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

// CREATE

router.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    } catch (e) {
        res.status(500).json(e);
    }
})

// UPATE

router.put("/:id", async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(updatedHotel);
    } catch (e) {
        res.status(500).json(e);
    }
})

// DELETE

router.delete("/:id", async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch (e) {
        res.status(500).json(e);
    }
})

// GET

router.get("/:id", async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (e) {
        res.status(500).json(e);
    }
})

// GETALL

router.get("/", async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (e) {
        res.status(500).json(e);
    }
})

export default router;