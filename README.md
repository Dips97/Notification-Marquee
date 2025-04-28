📢 Notification Marquee SPFx Web Part
A simple and elegant SharePoint Framework (SPFx) React Web Part that displays a scrolling marquee notification for important messages and announcements.

📂 Project Structure
/src/webparts/notificationMarquee/
│
├── components/
│   ├── INotificationMarqueeProps.ts
│   ├── NotificationMarquee.module.scss
│   ├── NotificationMarquee.tsx
│
├── NotificationMarqueeWebPart.ts
├── NotificationMarqueeWebPart.manifest.json
│
├── config/
├── gulpfile.js
├── package.json
├── tsconfig.json

✨ Features
  1. Lightweight scrolling marquee for important notices.
  2. Configurable message via WebPart property pane.
  3. Responsive design and customizable styles.
  4. Compatible with SharePoint modern pages, Teams tab, and full-page apps.

🛠 How to Run Locally
1. Clone the repository:
git clone https://github.com/your-username/notification-marquee-spfx.git
cd notification-marquee-spfx

2. Install dependencies:
npm install

3. define the domain in config/serv.json
 "initialPage": "https://<yourtenant>.sharepoint.com/_layouts/workbench.aspx"

4. Start local SharePoint workbench:
gulp serve

📦 How to Package the Solution for Production
1. Clean the solution:
gulp clean

2. Build the solution:
gulp build

3. Bundle the solution:
gulp bundle --ship

4. Package the solution:
gulp package-solution --ship

5. Locate the packaged .sppkg file:
sharepoint/solution/notification-marquee.sppkg

6. Upload the .sppkg file to your SharePoint App Catalog to deploy.

📋 License
This project is licensed under the MIT License.

📧 Contact
For any queries or issues, please contact: [dipak@powersolution.dev]
or visit my LinkedIn Profile: https://www.linkedin.com/in/dip26/
