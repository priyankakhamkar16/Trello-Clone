import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/homepage.css'; // Importing the CSS

const HomePage = () => {
  const [view, setView] = useState('cards'); // State to manage the current view
  const navigate = useNavigate(); // Hook to navigate to the signup page

  // Function to handle signup button click
  const handleSignUpClick = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  // Content based on the selected view
  const content = {
    cards: {
      title: "Manage tasks with ease.",
      description: [
        { boldText: "Members:", normalText: " Keep everyone accountable and never have to ask “who’s doing that” by adding members to cards for their projects and tasks." },
        { boldText: "Due dates:", normalText: " They're easy to set, hard to miss (with reminders!), and oh-so-satisfying to mark as “done.”" },
        { boldText: "Attachments:", normalText: " No more digging through endless email chains to find attachments. Just drag and drop them onto a card so the right files stay with the right tasks." },
        { boldText: "Checklists:", normalText: " Your best tool to overpower overwhelming asks. Break big tasks into small ones, check things off the list, and watch that status bar go to 100% complete." }
      ],
      image: require('../images/cards.webp') // Placeholder image for cards view
    },
    views: {
      title: "Bring powerful new views to your team’s work.",
      description: [
        { boldText: "Success starts with a Trello board:", normalText: " Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done." },
        { boldText: "Hit deadlines every time with Timeline:", normalText: " Stay on top of every sprint and stay on track of every goal. Use Timeline to see how all of the moving parts piece together over time and drag and drop dates to make adjustments on the fly." },
        { boldText: "Use Calendar to stay on top of tasks:", normalText: " Whether scheduling a quarterly editorial calendar or staying on top of your to-dos, Calendar is like a crystal ball giving you a clear vision of what work lies ahead." }
      ],
      image: require('../images/views.webp') // Placeholder image for views view
    },
    automation: {
      title: "Create rules, buttons, and commands in Trello.",
      description: [
        { boldText: "Rules for boards:", normalText: " Setting rules means important tasks won’t fall through the cracks. Set a trigger and the actions to be performed, and let Butler run the show." },
        { boldText: "Move work forward:", normalText: " Get to the next step faster with custom card and board buttons. Perform a series of actions in a single click!" },
        { boldText: "Integrate your favorite apps:", normalText: " Extend beyond your boards with integrations. Post messages to Slack, create Jira tickets, and send emails right from your boards." },
        { boldText: "Intelligent automation tips:", normalText: " As you use a Trello board, Butler will recognize repetitive actions and suggest automations that can be enabled in a single click." }
      ],
      image: require('../images/automation.webp') // Placeholder image for automation view
    }
  };

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-left">
          <h1 className="homepage-title">Trello makes it easier for teams to manage projects and tasks</h1>
          <p className="homepage-subtitle">
            Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.
          </p>
          <h2 className="homepage-heading">WHAT YOU GET ON THE FREE PLAN:</h2>
          <ul className="homepage-list">
            <li>Unlimited cards</li>
            <li>Unlimited Power-Ups per board</li>
          </ul>
          <div className="homepage-signup">
            <input type="email" placeholder="Enter your email" className="homepage-email" />
            <button 
              className="homepage-signup-button"
              onClick={handleSignUpClick} // Handle the click event
            >
              Sign Up - It's Free
            </button>
          </div>
        </div>
        <div className="homepage-right">
          <img 
            src={require('../images/hero1.webp')} 
            alt="Trello visual representation"
            className="homepage-image" 
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="homepage-feature-section">
        <div className="homepage-feature-buttons">
          <button onClick={() => setView('cards')} className="homepage-feature-button">Cards</button>
          <button onClick={() => setView('views')} className="homepage-feature-button">Views</button>
          <button onClick={() => setView('automation')} className="homepage-feature-button">Automation</button>
        </div>

        <h2 className="homepage-feature-title">{content[view].title}</h2>

        <div className="homepage-feature-content">
          <div className="homepage-feature-text">
            <ul className="homepage-feature-description">
              {content[view].description.map((item, index) => (
                <li key={index}>
                  <strong>{item.boldText}</strong>{item.normalText}
                </li>
              ))}
            </ul>
          </div>
          <img 
            src={content[view].image} 
            alt="Feature visual representation"
            className="homepage-feature-image" 
          />
        </div>
      </div>

      {/* About Section */}
      <div className="homepage-about-section">
        <div className="homepage-about-content">
          <div className="homepage-about-text">
            <h2 className="homepage-about-title">Features to help your team succeed</h2>
            <p className="homepage-about-description">
              Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.
            </p>
          </div>
          <img 
            src={require('../images/about1.webp')} 
            alt="About visual representation"
            className="homepage-about-image" 
          />
        </div>
        <div className="homepage-about-content reverse">
          <div className="homepage-about-text">
            <h2 className="homepage-about-title">Streamline your workflows</h2>
            <p className="homepage-about-description">
              With Trello’s easy-to-use tools, your team can effortlessly organize tasks, prioritize projects, and track progress. Whether it’s a simple task list or a complex project, Trello adapts to your needs.
            </p>
          </div>
          <img 
            src={require('../images/about2.webp')} 
            alt="About visual representation"
            className="homepage-about-image" 
          />
        </div>
        <div className="homepage-about-content">
          <div className="homepage-about-text">
            <h2 className="homepage-about-title">Collaborate with ease</h2>
            <p className="homepage-about-description">
              Trello’s collaboration features help your team stay connected, with real-time updates and integrations with your favorite tools. Keep everyone in the loop and drive success together.
            </p>
          </div>
          <img 
            src={require('../images/about3.webp')} 
            alt="About visual representation"
            className="homepage-about-image" 
          />
        </div>
        <div className="homepage-about-content reverse">
          <div className="homepage-about-text">
            <h2 className="homepage-about-title">Streamline your workflows</h2>
            <p className="homepage-about-description">
              With Trello’s easy-to-use tools, your team can effortlessly organize tasks, prioritize projects, and track progress. Whether it’s a simple task list or a complex project, Trello adapts to your needs.
            </p>
          </div>
          <img 
            src={require('../images/about4.webp')} 
            alt="About visual representation"
            className="homepage-about-image" 
          />
        </div>
      </div>

      {/* New Sign-Up Section */}
      <div className="homepage-signup-section">
        <h2 className="homepage-signup-text">Sign up and get started with Trello today. A world of productive teamwork awaits!</h2>
        <div className="homepage-signup-container">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="homepage-signup-input" 
          />
          <button 
            className="homepage-signup-button"
            onClick={handleSignUpClick} // Redirect to signup page
          >
            Sign Up - It's Free
          </button>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
