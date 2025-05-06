export const SecurityBasics = () => {
  return (
    <>
      <h2 className="text-colored">The basics</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          Granola is an app for macOS and iPhone, a lot like Apple Notes or
          Notion. It requires Google Workspace login and integrates with your
          calendar.
        </li>
        <li>
          You have to manually start Granola for a meeting (it won&rsquo;t
          auto-join or auto-record anything) . Granola then accesses your
          microphone audio, and your meeting audio on Mac, and transcribes it.
          It does not add a bot to your video call.
        </li>
        <li>
          Granola for Mac works with any meeting platform. Zoom, Meet, Teams,
          you name it. Granola for iPhone is built for in-person meetings.
        </li>
        <li>
          Granola uses best-in-class transcription providers (like Deepgram and
          Assembly) and AI providers (like OpenAI and Anthropic) to summarize
          your meeting.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">Model training</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          We do not allow third parties (like OpenAI or Anthropic) to use your
          data to train their AI models.
        </li>
        <li>
          Granola trains on your anonymized data so we can keep making Granola
          better. You can opt out of this in your Settings.
        </li>
        <li>Enterprise users have model training turned off by default.</li>
      </ul>

      <h2 className="mt-8 text-colored">No stored recordings</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          Granola doesn&rsquo;t store the audio from meetings - it transcribes
          in real time on Mac, or after your meeting on iPhone using temporarily
          cached audio. It only stores the transcript (and any notes you
          provide) from a call.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">You control who sees your notes</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          As a user, you control who sees your notes. Notes are private by
          default, until you choose to share them with others.
        </li>
        <li>
          You can delete individual notes, or request deletion of all your data
          at any time.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">
        Everything stored in industry standard, encrypted infrastructure
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          Notes are stored in our US-hosted AWS Virtual Private Cloud. They are
          encrypted at rest and in transit. They are backed up daily.
        </li>
        <li>
          Granola is built and maintained by our top-tier engineering team,
          you&rsquo;ve built scalable infrastructure for companies like Apple,
          Amazon, Google, and Meta.
        </li>
      </ul>

      <h2 className="mt-8 text-colored">We&rsquo;re here if you need us</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          If you have more questions, please {""}
          <a
            className="underline underline-offset-2 decoration-tertiary hover:decoration-accent-strong hover:text-accent-strong"
            href="/contact/sales"
          >
            reach out to our team.
          </a>
        </li>
      </ul>
    </>
  );
};
