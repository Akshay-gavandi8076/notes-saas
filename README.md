# [Notes SaaS Next.js App] (https://notes-saas-pi.vercel.app)

This project is a Next.js application for managing notes with features such as authentication, database storage, and subscription handling.

## Table of Contents

- [Resources Used](#resources-used)
- [Features](#features)
- [Pending States](#pending-states)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Environment Variables](#environment-variables)

## Resources Used

This section lists the external resources and technologies used in the project.

- [Next.js](https://nextjs.org): React framework for building web applications.
- [Kinde](https://dub.sh/xeU8r3v): Authentication service for passwordless authentication.
- [Tailwind.css](https://tailwindcss.com): Utility-first CSS framework.
- [Shadcn/UI](https://ui.shadcn.com): UI components for enhancing the user interface.
- [Stripe](https://stripe.com): Payment processing for subscription handling.
- [Prisma](https://prisma.io): Database toolkit for accessing databases.
- [Supabase](https://supabase.com): PostgreSQL database hosting and management.

## Features

This section outlines the key features of the project.

- 🌐 Next.js App Router
- 🔐 Kinde Authentication
- 📧 Passwordless Auth
- 🔑 OAuth (Google and GitHub)
- 💿 Supabase Database
- 💨 Prisma ORM
- 🎨 Styling with Tailwind.css and Shadcn UI
- ✅ Change the color scheme to your liking
- 💵 Stripe for subscription handling
- 🪝 Implementation of Stripe Webhooks
- 😶‍🌫️ Deployment to Vercel

## Pending States

List of features or improvements that are yet to be implemented:

- Cache Revalidation
- Stripe Customer Portal
- Stripe Checkout page
- Server-side implementation
- Add Notes, View Notes, Edit Notes, Delete Notes

## Usage

Provide instructions on how to use and run the project.

## Screenshots

Include screenshots of your application to give users a visual preview.

![Screenshot 1](/public/images/landingpage.png)
![Screenshot 1](/public/images/dashboardHome.png)
![Screenshot 1](/public/images/dashboardSetting.png)

<!-- Add more screenshots here as needed -->
<!-- ![Screenshot 2](images/screenshot2.png) -->

## Installation

This section provides steps to set up the project locally.

1. Clone the repository: `https://github.com/Akshay-gavandi8076/notes-saas.git`
2. Navigate to the project directory: `cd your-project-directory`
3. Install dependencies:

   Using Yarn:

   ```bash
   yarn install
   ```

   Or using npm:

   ```bash
   npm install
   ```

## Environment Variables

This project uses several environment variables for configuration. Create a `.env` file in the root of your project and add the following variables:

```dotenv
# Kinde Authentication Configuration
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=

KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

# Supabase Database Configuration
DATABASE_URL=

# Direct URL (if needed)
DIRECT_URL=

# Stripe Configuration
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=‚

# Production URL (if applicable)
PRODUCTION_URL=https://notes-saas-pi.vercel.app
```
