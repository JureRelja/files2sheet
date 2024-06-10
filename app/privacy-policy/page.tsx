import Navbar from "../navbar";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col gap-12 mb-10">
      {/* hero section */}
      <section className="h-[150px] bg-background w-full">
        <div className="flex flex-col gap-12 w-[1000px] m-auto my-5 ">
          <Navbar />
        </div>
      </section>
      <div className="flex flex-col gap-2 w-[1000px] mx-auto">
        <h1>
          <strong>Privacy Policy for files2sheet.com</strong>
        </h1>

        <p>
          At files2sheet.com, accessible from https://files2sheet.com/, one of
          our main priorities is the privacy of our visitors. This Privacy
          Policy document contains types of information that is collected and
          recorded by files2sheet.com and how we use it.
        </p>

        <h2>
          <strong>How is Google's users data handeled</strong>
        </h2>

        <p>
          files2sheet.com uses Google's OAuth2 for authentication. When you
          authenticate with Google, we only request the following permissions:
        </p>
        <ul>
          <li>
            "https://www.googleapis.com/auth/drive.file" - This permission is
            used to upload files to user's Google Drive and to also access those
            same files from with user's desired Google Sheet file.
          </li>
          <li>
            "https://www.googleapis.com/auth/spreadsheets" - This permission is
            used to add data to user's desired Google Sheet file.
          </li>
          <li>
            "https://www.googleapis.com/auth/script.container.ui" - This
            permission is used to display pop ups and third-party content inside
            the Files2Sheet app.
          </li>
          <li>
            "https://www.googleapis.com/auth/script.external_request" - This
            permission is used to make external requests to third-party service
            called Gumroad to handle subscription payments.
          </li>
        </ul>
        <p>
          files2sheet.com uses Google's user data to upload files to user's
          Google Drive and to also access those same files from with user's
          desired Google Sheet file. files2sheet.com also uses Google's user
          data to add data to user's desired Google Sheet file. files2sheet.com
          also uses Google's user data to display pop ups and third-party
          content inside the Files2Sheet app. files2sheet.com also uses Google's
          user data to make external requests to third-party service called
          Gumroad to handle subscription payments.
        </p>
        <p>
          All of the user's data is handeled securly using SSL data encryption
          and is never available to other people.
        </p>

        <h2>
          <strong>How long is Google's users data stored</strong>
        </h2>
        <p>
          files2sheet.com doesn't store any private user data. All of the user's
          data is stored in Google's servers and is only available to the user.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <h2>
          <strong>Log Files</strong>
        </h2>

        <p>
          files2sheet.com follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users movement on the website, and gathering demographic
          information.
        </p>

        <h2>
          <strong>Privacy Policies</strong>
        </h2>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of files2sheet.com.
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on files2sheet.com, which are
          sent directly to users browser. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that files2sheet.com has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>

        <h2>Third Party Privacy Policies</h2>

        <p>
          files2sheet.com's Privacy Policy does not apply to other advertisers
          or websites. Thus, we are advising you to consult the respective
          Privacy Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.{" "}
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </p>

        <h2>Children's Information</h2>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          files2sheet.com does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h2>
          <strong>Online Privacy Policy Only</strong>
        </h2>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in files2sheet.com. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>

        <h2>
          <strong>Consent</strong>
        </h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    </main>
  );
}
