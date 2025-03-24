const express = require("express");
const router = express.Router();
const WishList = require("../models/WishList");
const {protect} = require("../middleware/authenticateUser"); // Middleware to check if user is authenticated
const BookingModel = require("../models/BookingModel");
const nodemailer = require("nodemailer");
// Add a package to the wishlist
router.post("/add", protect, async (req, res) => {
    try {
       
        console.log(req.body);
        const userId = req.user._id;
        const {place,image,price} = req.body;
        let userWishlist = await WishList.findOne({ userId });

        if (!userWishlist) {
            userWishlist = new WishList({ userId, Tours: [] });
        }
       
        // Check if the package already exists in the wishlist
        const exists = userWishlist.Tours.some(tour => tour.place === place);
        if (exists) {
            return res.status(400).json({ message: "Tour already exists in wishlist" });
        }
        console.log(userId);
        userWishlist.Tours.push({ place, image, price });

        await userWishlist.save();
        res.status(201).json({ message: "Tour added to wishlist", wishlist: userWishlist });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

router.post("/bookings", async (req, res) => {
    try {
      const { userId, package, travelers, contactDetails, travelDate, userMail } = req.body;
      
      console.log("Received userId:", userId);
      console.log("Full request body:", req.body);
  
      if (!userId || !package || !travelers.length || !contactDetails.phone || !contactDetails.email || !travelDate) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      const newBooking = new BookingModel({
        userId,
        package,
        travelers,
        contactDetails,
        travelDate,
      });
  
      await newBooking.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "packandngo.booking@gmail.com", // Replace with your email
          pass: "xmvy huwv pjbn bbck", // Replace with your app password (not actual password)
        },
      });
      console.log(userMail)
    //   res.status(201).json({ message: "Booking successful" });
    const mailOptions = {
        from: "packandgo.booking@gmail.com",
        to: userMail,
        subject: "✅ Booking Confirmed - Pack & Go 🎉",
        html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #2C3E50; text-align: center;">📜 Booking Details 📜</h2>
            <p><strong>🌍 Package:</strong> ${package.place}</p>
            <p><strong>📅 Travel Date:</strong> ${new Date(travelDate).toDateString()}</p>
    
            <h3 style="color: #3498DB;">🧳 Traveler Details:</h3>
            <ul>
              ${travelers
                .map(
                  (traveler, index) =>
                    `<li style="margin-bottom: 5px;">👤 <strong>Traveler ${index + 1}:</strong> ${traveler.name}, Age: ${traveler.age}, Gender: ${traveler.gender}</li>`
                )
                .join("")}
            </ul>
    
            <h3 style="color: #3498DB;">📞 Contact Details:</h3>
            <p><strong>📱 Phone:</strong> ${contactDetails.phone}</p>
            <p><strong>📧 Email:</strong> ${contactDetails.email}</p>
    
            <hr style="border: none; height: 1px; background: #ddd;">
            <p style="text-align: center; color: #777;">📩 If you have any questions, contact us at <a href="mailto:packandgo.support@gmail.com" style="color: #3498DB;">packandngo.support@gmail.com</a>.</p>
            
            <p style="text-align: center; color: #2C3E50; font-weight: bold;">✨ Thank you for choosing Pack & Go! ✈️</p>
        </div>
        `,
    };
  
      // Send email
      await transporter.sendMail(mailOptions);
  
      res.status(201).json({ message: "Booking successful! Email sent to admin." });
    } catch (error) {
      console.error("Booking error:", error); // Log the full error
      res.status(500).json({ error: error.message }); // Return the exact error
    }
  
  });

// Get user's wishlist
router.get("/:userId", protect, async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(userId);
        const userWishlist = await WishList.findOne({ userId });
        
        if (!userWishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }
        console.log(userWishlist);
        res.status(200).json(userWishlist.Tours);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

// Remove an item from the wishlist
router.delete("/remove/:userId/:place", protect, async (req, res) => {
    try {
        const { userId, place } = req.params;

        let userWishlist = await WishList.findOne({ userId });

        if (!userWishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        userWishlist.Tours = userWishlist.Tours.filter(tour => tour.place !== place);

        await userWishlist.save();
        res.status(200).json({ message: "Tour removed from wishlist", wishlist: userWishlist });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});



module.exports = router;