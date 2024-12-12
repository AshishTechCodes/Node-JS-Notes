const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

const Publishable_Key = "pk_test_51QKh7HGD4okwYzMi244BhW3R0IYsLVLVuFHR6NfgNSGVzaIEvTw7j6AgcaSfCSolHaXkYh7Y86Q5EskT3d3t47Ed00YbkKKXrL";
const Secret_Key = "sk_test_51QKh7HGD4okwYzMi3AnjWP5W7sQN5hgYoQeliRyLYBrFnoBiRQFouSquSt3gwLGb7FNUJ4vyIMAjLHAFKigTAHOh00V43Aq9Yf";

const stripe = require("stripe")(Secret_Key);

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("Home", {
        key: Publishable_Key
    });
});

app.post("/payment", function (req, res) {
    stripe.customers
        .create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: "Pranshu Singh",
            address: {
                line1: "Sushila sadan vijay nagar nallasopara (east)",
                postal_code: "401209",
                city: "Mumbai",
                state: "Uttar Pradesh",
                country: "India",
            }
        })
        .then((customer) => {
            return stripe.charges.create({
                amount: 2500,    // Charging Rs 25
                description: "Web Development Product",
                currency: "INR",
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success");
        })
        .catch((err) => {
            res.send(err);
        });
});

app.listen(port, function (error) {
    if (error) throw error;
    console.log(`Server created Successfully on http://localhost:${port}`);
});