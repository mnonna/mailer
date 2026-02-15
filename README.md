# My Node Mail App

This is a simple Node.js application that provides an endpoint to send emails using form data. It utilizes Express for the server and Nodemailer for sending emails.

## Project Structure

```
my-node-mail-app
├── src
│   ├── app.js          # Entry point of the application
│   └── routes
│       └── mail.js     # Mail route for handling email sending
├── package.json        # NPM configuration file
├── .env                # Environment variables for email configuration
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-node-mail-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your email service configuration:
   ```
   EMAIL_SERVICE=<your_email_service>
   EMAIL_USER=<your_email_address>
   EMAIL_PASS=<your_email_password>
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Send a POST request to the `/mail` endpoint with form data. The required fields are:
   - `to`: Recipient's email address
   - `subject`: Subject of the email
   - `message`: Body of the email

## Example Request

```bash
curl -X POST http://localhost:3000/mail \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "to=recipient@example.com&subject=Hello&message=This is a test email."
```

## License

This project is licensed under the MIT License.