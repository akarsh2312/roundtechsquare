require('dotenv').config();
const Contact = require('./contactModel');
const nodemailer = require('nodemailer');

// GET all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new contact
const createContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    phone,
    message,
  });

  try {
    await newContact.save();

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      // to: 'darsh@roundtechsquare.com, minakshi@roundtechsquare.com',
      to:'kavyakhandelwal56@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getContacts, createContact };