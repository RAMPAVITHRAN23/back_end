const express = require("express");
const { PrismaClient } = require("@prisma/client"); // Import PrismaClient

const app = express();
const prisma = new PrismaClient();

// Middleware to parse JSON
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        // 1. Fetch all products from database
        const productData = await prisma.product.findMany();

        // 2. Send response
        res.json({
            message: "Fetched all products successfully",
            data: productData,
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

// Get a single product by product_id
app.get("/:id", async (req, res) => {
    try {
        const productId = req.params.id;

        // Fetch product by product_id
        const productData = await prisma.product.findUnique({
            where: { product_id: productId },
        });

        if (!productData) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Fetched product successfully", data: productData });
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
});

// Create a new product
app.post("/", async (req, res) => {
    try {
        const data = req.body;

        // Create product
        const productData =  prisma.product.create({
            data: {
                product_id: data.product_id,
                image_url: data.image_url,
                rating: data.rating, // Ensure correct data type
                timing: data.timing,   // Ensure correct data type
                address: data.address,
            },
        });

        res.json({ message: "Product created successfully", data: productData });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
});

// Update a product
app.put("/", async (req, res) => {
    try {
        const data = req.body;

        // Ensure product exists before updating
        const existingProduct = await prisma.product.findUnique({
            where: { product_id: data.product_id },
        });

        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update product
        const productData = await prisma.product.update({
            where: { product_id: data.product_id },
            data: {
                image_url: data.image_url,
                rating: data.rating,
                timing: data.timing,
                address: data.address,
            },
        });

        res.json({ message:"Product updated successfully", data: productData });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
});

// Delete a product
app.delete("/", async (req, res) => {
    try {
        const { product_id } = req.body;

        // Ensure product exists before deleting
        const existingProduct = await prisma.product.findUnique({
            where: { product_id },
        });

        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Delete product
        await prisma.product.delete({
            where: { product_id },
        });

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server running");
});
