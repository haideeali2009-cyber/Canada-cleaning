import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { Booking, EmailLog } from "./src/types";

const app = express();
const PORT = 3000;

// Setup directories for database
const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");
const EMAILS_FILE = path.join(DATA_DIR, "emails.json");

// Ensure data folder and database files exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to load file content
const loadData = <T>(filePath: string, defaultValue: T[]): T[] => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
  }
  // Initialize with seed data or defaults
  fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), "utf-8");
  return defaultValue;
};

// Helper to save file content
const saveData = <T>(filePath: string, data: T[]): void => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error saving data to ${filePath}:`, error);
  }
};

// Initial Seed Bookings
const seedBookings: Booking[] = [
  {
    id: "booking-101",
    fullName: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "416-555-0192",
    address: "128 Bremner Blvd, Suite 2402, Toronto, ON M5J 3A6",
    serviceType: "Airbnb Turnover Cleaning",
    bedrooms: 2,
    bathrooms: 2,
    preferredDate: "2026-07-10",
    preferredTimeSlot: "11:00 AM - 2:00 PM (Turnover Window)",
    additionalNotes: "Key is in lockbox code 4829. Please replace linen on both beds (fresh linens in master closet) and replenish coffee pods.",
    status: "approved",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(), // 2 days ago
    totalCost: 189,
  },
  {
    id: "booking-102",
    fullName: "Marcus Vance",
    email: "marcus@vanceproperties.ca",
    phone: "604-555-0143",
    address: "838 W Hastings St, Vancouver, BC V6C 1C8",
    serviceType: "Vacation Rental Cleaning",
    bedrooms: 3,
    bathrooms: 2.5,
    preferredDate: "2026-07-11",
    preferredTimeSlot: "11:00 AM - 2:00 PM (Turnover Window)",
    additionalNotes: "Guests leaving at 10 AM, next ones check in at 4 PM. Very tight window. Code for front door is 2026#.",
    status: "pending",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(), // 12 hours ago
    totalCost: 249,
  },
  {
    id: "booking-103",
    fullName: "Chantelle Tremblay",
    email: "tremblay.c@vacancesmtl.ca",
    phone: "514-555-0177",
    address: "350 Rue Saint-Paul Est, Montréal, QC H2Y 1H2",
    serviceType: "Property Management Cleaning",
    bedrooms: 1,
    bathrooms: 1,
    preferredDate: "2026-07-09",
    preferredTimeSlot: "8:00 AM - 11:00 AM (Morning)",
    additionalNotes: "Weekly recurring cleaning. Standard Airbnb setup with welcoming chocolate on table.",
    status: "completed",
    createdAt: new Date(Date.now() - 3600000 * 96).toISOString(), // 4 days ago
    totalCost: 129,
  }
];

// Initial Seed Emails
const seedEmails: EmailLog[] = [
  {
    id: "email-101a",
    to: "sarah.j@example.com",
    subject: "Canada Clean - Turnover Booking Confirmed (#booking-101)",
    body: "Hi Sarah Jenkins,\n\nYour turnover cleaning booking has been approved! Our professional cleaning team is scheduled to arrive at 128 Bremner Blvd, Suite 2402, Toronto, ON M5J 3A6 on 2026-07-10 during the 11:00 AM - 2:00 PM window.\n\nThank you for choosing Canada Clean!\n\nBest regards,\nCanada Clean Operations Team",
    sentAt: new Date(Date.now() - 3600000 * 47).toISOString(),
    type: "customer"
  },
  {
    id: "email-101b",
    to: "bookings@canadaclean.ca",
    subject: "NEW BOOKING CONFIRMED: Sarah Jenkins - Toronto, ON",
    body: "Canada Clean Operations,\n\nBooking #booking-101 has been APPROVED.\n\nCustomer: Sarah Jenkins (sarah.j@example.com)\nAddress: 128 Bremner Blvd, Suite 2402, Toronto, ON M5J 3A6\nService: Airbnb Turnover Cleaning (2 Bed, 2 Bath)\nDate: 2026-07-10 @ 11:00 AM - 2:00 PM\nNotes: Key is in lockbox code 4829...",
    sentAt: new Date(Date.now() - 3600000 * 47).toISOString(),
    type: "business"
  }
];

// Load databases
let bookings: Booking[] = loadData(BOOKINGS_FILE, seedBookings);
let emails: EmailLog[] = loadData(EMAILS_FILE, seedEmails);

app.use(express.json());

// API: Get all bookings
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

// API: Create new booking
app.post("/api/bookings", (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      address,
      serviceType,
      bedrooms,
      bathrooms,
      preferredDate,
      preferredTimeSlot,
      additionalNotes,
    } = req.body;

    if (!fullName || !email || !phone || !address || !serviceType || !preferredDate || !preferredTimeSlot) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Calculate dynamic cost
    let basePrice = 129;
    if (serviceType.includes("Deep")) basePrice = 199;
    if (serviceType.includes("Move-In")) basePrice = 229;
    if (serviceType.includes("Emergency")) basePrice = 179;
    
    const bedCost = (bedrooms - 1) * 35;
    const bathCost = (bathrooms - 1) * 25;
    const totalCost = basePrice + Math.max(0, bedCost) + Math.max(0, bathCost);

    const newBooking: Booking = {
      id: `booking-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      email,
      phone,
      address,
      serviceType,
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      preferredDate,
      preferredTimeSlot,
      additionalNotes: additionalNotes || "",
      status: "pending",
      createdAt: new Date().toISOString(),
      totalCost,
    };

    // Store in memory & save to file
    bookings.unshift(newBooking);
    saveData(BOOKINGS_FILE, bookings);

    // Simulate sending automated emails (Create logs)
    const customerEmailId = `email-${Math.floor(100000 + Math.random() * 900000)}a`;
    const businessEmailId = `email-${Math.floor(100000 + Math.random() * 900000)}b`;

    const customerEmail: EmailLog = {
      id: customerEmailId,
      to: email,
      subject: `Canada Clean - Turnover Cleaning Request Received (#${newBooking.id})`,
      body: `Hi ${fullName},\n\nWe have received your turnover cleaning request for ${address}.\n\n--- Booking Details ---\nBooking ID: #${newBooking.id}\nService: ${serviceType}\nSize: ${bedrooms} Bed, ${bathrooms} Bath\nDate: ${preferredDate}\nTime Slot: ${preferredTimeSlot}\nEstimated Total: $${totalCost} CAD\n\nOur team will contact you shortly to confirm availability and lock in your schedule!\n\nThank you for choosing Canada Clean.\n\nBest regards,\nCanada Clean Booking Support`,
      sentAt: new Date().toISOString(),
      type: "customer"
    };

    const businessEmail: EmailLog = {
      id: businessEmailId,
      to: "bookings@canadaclean.ca",
      subject: `[NEW INQUIRY] #${newBooking.id} - ${fullName} (${serviceType})`,
      body: `New turnover cleaning request received from website:\n\nCustomer: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nService: ${serviceType} (${bedrooms} Bed, ${bathrooms} Bath)\nPreferred Date: ${preferredDate}\nPreferred Time Slot: ${preferredTimeSlot}\nEstimated Price: $${totalCost} CAD\nNotes: ${additionalNotes || "None"}\n\nPlease review and approve this booking in your Admin Dashboard.`,
      sentAt: new Date().toISOString(),
      type: "business"
    };

    emails.unshift(customerEmail, businessEmail);
    saveData(EMAILS_FILE, emails);

    res.status(201).json({
      success: true,
      booking: newBooking,
      simulatedEmails: {
        customer: customerEmail,
        business: businessEmail,
      },
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API: Update booking (Status, Date, Notes, etc.)
app.patch("/api/bookings/:id", (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const index = bookings.findIndex((b) => b.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const previousStatus = bookings[index].status;
    bookings[index] = { ...bookings[index], ...updates };
    saveData(BOOKINGS_FILE, bookings);

    // If booking is newly approved, simulate an approval email
    if (updates.status === "approved" && previousStatus !== "approved") {
      const approvalEmailId = `email-${Math.floor(100000 + Math.random() * 900000)}c`;
      const approvalEmail: EmailLog = {
        id: approvalEmailId,
        to: bookings[index].email,
        subject: `Canada Clean - Turnover Booking Confirmed (#${bookings[index].id})`,
        body: `Hi ${bookings[index].fullName},\n\nYour turnover cleaning booking (#${bookings[index].id}) has been approved!\n\nOur team is scheduled to arrive at ${bookings[index].address} on ${bookings[index].preferredDate} during the ${bookings[index].preferredTimeSlot} window.\n\nThank you for choosing Canada Clean!\n\nBest regards,\nCanada Clean Operations Team`,
        sentAt: new Date().toISOString(),
        type: "customer"
      };
      emails.unshift(approvalEmail);
      saveData(EMAILS_FILE, emails);
    }

    res.json(bookings[index]);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API: Delete booking
app.delete("/api/bookings/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = bookings.findIndex((b) => b.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Booking not found" });
    }

    bookings.splice(index, 1);
    saveData(BOOKINGS_FILE, bookings);
    res.json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API: Get all email logs (For visual audit)
app.get("/api/emails", (req, res) => {
  res.json(emails);
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
