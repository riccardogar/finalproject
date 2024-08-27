**EcoTravel**

EcoTravel is a web application designed to help you travel sustainably by providing accurate calculations of your flight's carbon footprint and eco-friendly travel tips. With EcoTravel, you can explore the world responsibly and with awareness.

Try the project here -> https://ecotravelcalculator.netlify.app/

**Features**

Flight Carbon Footprint Calculator: Calculate your carbon footprint based on origin, destination, cabin class, and number of passengers.
Dark Mode: Switch between light and dark mode for a customized browsing experience.
Eco Tips: Discover tips for more sustainable travel practices.
Contact Form: Send a message to the EcoTravel team via the contact form.

**Technologies Used**
React: JavaScript library used to build the user interface of the application.
React Router: Manages routing for navigation between different pages of the application.
Tailwind CSS: CSS framework for responsive and customizable design.
Axios: Library used for making HTTP requests to the external API for carbon footprint calculations.
GoClimate API: API used to calculate the carbon footprint of flights.

**Project Structure**
App.js: Main component that handles routing and theme (light/dark mode).
components/:
Navbar.jsx: Component for navigation between different sections of the application.
Footer.jsx: Footer component containing copyright information.
TipCard.jsx: Component used on the eco tips page.
pages/:
Home.jsx: Main page introducing the application and providing access to the carbon footprint calculator.
FlightCalculator.jsx: Component that calculates the carbon footprint of a flight based on user input.
FlightFootprintCalculator.jsx: Component that provides detailed flight footprint calculations.
Contact.jsx: Page containing a contact form to send messages to the EcoTravel team.
About.jsx: Page describing EcoTravel’s mission and offerings.
Tips.jsx: Page with eco-friendly travel tips.
