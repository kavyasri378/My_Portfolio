# Web3Forms Setup Guide

Your contact form is now configured to send emails to **kavyasri.d2024cse@sece.ac.in** using Web3Forms.

## Quick Setup (2 minutes)

1. **Visit Web3Forms**
   - Go to https://web3forms.com
   - Click "Start Free" or "Get API Key"

2. **Sign Up (Optional)**
   - You can use it without signing up, but signing up lets you see submission history
   - Sign up with email or Google

3. **Get Your Access Key**
   - After signing up, you'll get an **Access Key**
   - Copy this key

4. **Update Your Portfolio Code**
   - Open `src/sections/Contact.jsx`
   - Find this line (near the top):

   ```javascript
   const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
   ```

   - Replace it with:

   ```javascript
   const WEB3FORMS_ACCESS_KEY = "your_access_key_here";
   ```

5. **Done!**
   - Your contact form will now send emails directly to your inbox
   - Test it: Fill out the form and submit
   - You should receive an email at `kavyasri.d2024cse@sece.ac.in`

## Features

✅ **Free** - No credit card needed  
✅ **Simple** - No backend required  
✅ **Fast** - Emails delivered instantly  
✅ **Reliable** - 99.9% uptime  
✅ **Spam Protection** - Built-in reCAPTCHA option

## What Happens When Someone Submits?

1. Form data is sent to Web3Forms API
2. Web3Forms forwards the email to your inbox
3. You see a success message with confetti animation
4. Form clears and resets

## How to Get Your Access Key

**With Web3Forms account:**

- Visit https://web3forms.com/dashboard
- Copy your Access Key from the dashboard

**Without account:**

- Visit https://web3forms.com/api
- Generate a temporary key (expires in 24 hours)

## Troubleshooting

**Email not received?**

- Check your spam/junk folder
- Make sure you entered the correct access key
- Verify the email in PERSONAL_INFO is correct

**Form shows error?**

- Check browser console (F12 → Console tab)
- Make sure internet connection is active
- Try again after a few seconds

**Want to track submissions?**

- Create a free account at web3forms.com
- See all submissions in your dashboard
- Set up auto-replies and more

## Alternative: Use with reCAPTCHA

For better spam protection, Web3Forms integrates with Google reCAPTCHA. Visit their docs for integration steps.

---

That's it! Your contact form is now live and emails go directly to your inbox. 📧
