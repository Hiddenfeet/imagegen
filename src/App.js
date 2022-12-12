import logo from "./logo.svg";
import "./App.css";
import { KenBurn } from "./components/KenBurn/KenBurn";
import { NFT } from "./components/NFT/NFT";
import { Imagine } from "./components/Imagine/Imagine";
import { Utils } from "./components/Utils/Utils";
import { RoadMap } from "./components/RoadMap/RoadMap";
import { HeroSection1 } from "./components/HeroSection1/HeroSection1";
import { Team } from "./components/Team/Team";
import { ArtGallery } from "./components/ArtGallery/ArtGallery";
import { Email } from "./components/Email/Email";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Review } from "./components/Review/Review";
import Faq from "./components/Faq/Faq";
function App() {
  return (
    <div className="App">
      <KenBurn />
      <NFT />
      <Imagine />
      <Utils />
      <RoadMap />
      <HeroSection1 />
      <Team />
      <ArtGallery />
      {/* <ArtGallery /> */}
      <Email />
      <h2 aria-level={2} data-aid="FAQ_SECTION_TITLE_RENDERED" data-font-scaled="true" className="x-el faqh c1-1 c1-2 c1-2t c1-2i c1-8z c1-u c1-2c c1-r c1-t c1-2g c1-b c1-7n c1-52 c1-49 c1-57 c1-4x c1-4n c1-4j c1-58 c1-59">
        <span className="x-el x-el-span c1-91 c1-4f c1-92 c1-93 c1-94">
          Frequently Asked Questions
        </span>
        <div className="x-el x-el-div c1-1 c1-2 c1-4 c1-95 c1-b c1-52 c1-57 c1-58 c1-59 c1-5a">
          <hr role="separator" className="x-el x-el-hr c1-1 c1-2 c1-96 c1-8r c1-11 c1-5y c1-t c1-97 c1-2l c1-b c1-52 c1-57 c1-58 c1-59 c1-5a" />
        </div>
      </h2>

      <div className="accorditions">
        <div className="first-accordition">
          <Faq
            title="How does MiSED minimize the risk?"
            content=" <p>By creating 9999 ambassadors of the Game plus the companies with high-end real-life products that will join the exchange platform, ‘MiSED’ is a win-win situation for everybody.</p>
          </br>"
          />
        </div>

        <Faq
          className="accordition"
          title="When will I get the results?"
          content=" <p> Instantly when you play the game. Check ‘roadmap’ for all details.</p>
          </br>
         "
        />

        <Faq
          className="accordition"
          title="Is my registration on The List a guarantee for a mint?"
          content=" <p>Unfortunatly not, however you can connect with us to get a spot on the Whitelist and then your chances are multiplying.</p>
          </br>"
        />

        <Faq
          className="accordition"
          title="Are there more Free Perks to come?"
          content=" <p> Yes, of course! For example physical goods, mentorship, tailormade NFTs and new investment opportunities.</p>
          </br>
         "
        />

        <Faq
          className="accordition"
          title="How to mint when I don’t own ETH yet?"
          content=" <p>We except Credit Cards too.</p>
          </br>
         "
        />

        <Faq
          className="accordition"
          title="Is it fast and easy to mint?"
          content=" <p> Yes! Just have your funding ready and follow the steps!  </p>
          </br>
         "
        />

       <Faq
          className="accordition"
          title="Can I ask anything else when it is not in this FAQ?"
          content=" <p>Yes, please do so! Fill in the contact form and we will get back to you for sure.</p>
          </br>
         "
        />

      </div>
      <ContactUs />
      <Review/>
      <Email />

    </div>
  );
}

export default App;
