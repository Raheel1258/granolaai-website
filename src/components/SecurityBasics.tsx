import { calendlyLink } from "@/constants/nav-links";

export const SecurityBasics = () => {
  return (
    <>
      <h2 className="text-colored">How NestQ Works with Your Meetings</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          NestQ offers flexible options for capturing client conversations:
          <ul className="list-circle pl-6 mt-2 space-y-1">
            <li>
              <strong>Web App:</strong> Use in your browser for in-person meeting notes, to record unscheduled calls, or connect to your calendar for scheduled virtual meetings.
            </li>
            <li>
              <strong>Phone App:</strong> Ideal for capturing in-person meeting details on the go.
            </li>
          </ul>
        </li>
        <li>
          <strong>Calendar Integration:</strong> NestQ seamlessly integrates with your calendar (e.g., Google, Outlook) to identify and prepare for your scheduled meetings.
        </li>
        <li>
          For virtual meetings, you have choices:
          <ul className="list-circle pl-6 mt-2 space-y-1">
            <li>Allow NestQ to automatically join as a participant (bot) using trusted third-party services like Recall.ai or Meeting Bass.</li>
            <li>Manually activate recording via the NestQ web app during your meeting.</li>
          </ul>
        </li>
        <li>
          NestQ is compatible with all major meeting platforms, including Zoom, Google Meet, and Microsoft Teams.
        </li>
        <li>
          We partner with leading AI providers like OpenAI for intelligent summarization and utilize high-quality transcription services to ensure accuracy.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">AI Model Training & Your Data Privacy</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>Your Data Stays Yours:</strong> We strictly prohibit third-party AI providers, such as OpenAI, from using your client data to train their general AI models. Your information is processed solely to provide NestQ&apos;s services to you.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">Audio Recordings & Transcripts</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>Minimal Audio Handling:</strong> NestQ is designed to minimize audio storage. Audio is captured only for transcription.
        </li>
        <li>
           When bot-assisted recording is used (via Recall.ai or Meeting Bass), these services handle initial audio capture and transcription per their strict security protocols. NestQ only receives and stores the final text transcript.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">You Control Your Data</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>Privacy by Default:</strong> All your notes and transcripts are private by default. You decide if, when, and with whom to share them.
        </li>
        <li>
          <strong>Full Retention & Deletion Control:</strong> You have complete authority over your data. Delete individual notes or request the deletion of your entire dataset at any time, in line with your firm&apos;s data retention policies.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">
        Secure, Encrypted Infrastructure
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>Encrypted Storage:</strong> Your transcripts and notes are stored in our Canada-hosted Azure Virtual Private Cloud, encrypted both at rest and in transit using industry-standard protocols.
        </li>
        <li>
          <strong>Reliable Backups:</strong> Data is backed up daily to ensure integrity and availability.
        </li>
        <li>
          <strong>Expert Engineering Team:</strong> NestQ is built and maintained by a top-tier engineering team with extensive experience creating secure, scalable infrastructure.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">We’re Here to Help</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          If you have more security questions, please {""}
          <a
            className="underline underline-offset-2 decoration-tertiary hover:decoration-accent-strong hover:text-accent-strong"
            href={calendlyLink}
          >
            reach out to our team.
          </a>
        </li>
      </ul>
    </>
  );
};