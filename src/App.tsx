import "./styles/App.css";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div>
      <h1>General Tips & Information</h1>
      <p className="info">
        Grab a full set of ingredients from the locations that will be the most
        difficult to return to. The locations by most difficult to get to and
        return from are as follows.
        <ol>
          <li> White pickup truck </li>
          <li>Shed behind the home / Shed to the left of the home </li>
          <li>Basement</li>
          <li>Bathroom</li>
        </ol>
      </p>
      <p className="info">
        Move Bags when the Van Arrives; It is up to you to determine whether or
        not it is safe to transport the bags. If so, move quickly and take your
        finger off the trigger for the time being, Unless you take enemy fire.
        (It will slightly increase the time it takes for Law Enforcers to engage
        you, giving you a better chance of survival. Keep in mind Specials such
        as Bulldozers, Tasers, Cloakers and Shields are exempt from this tip.
        Kill them on sight.)
      </p>
      <p className="info">
        There are multiple preset spots for cloakers to hide, They will hide
        behind the Blue Dumpster next to the White Sedan; Under the White Sedan;
        In the first or second story of the home.(Depending on the lab
        location.) and behind the fence near where the van would arrive on Rats.
        (The furthest down the street that the van can arrive.)
      </p>
      <p className="info">
        The Cloakers can hide behind the wall in front of the window in the main
        section of the home (Across from the bathroom next to the back door).
        They can also hide behind the counter top.
      </p>
      <p className="info">
        If you have a first level lab, The Bathroom is an extremely safe spot as
        the Officers are not programmed to go into there, and In such only enter
        on extremely rare occasions; The only real way they go into the bathroom
        is if you lead them in there. If you store bags in the bathroom tub,
        Cops will <b>NOT</b> take them, or teleport them.
      </p>
      <p className="info">
        Subtitles are especially helpful, as Bain is often ambiguous or
        uncertain.
      </p>
      <p className="info">
        Having a dedicated cook that knows the lines is paramount. If it is just
        one person in the lobby, then have just one dedicated cook. It is better
        to take a slightly longer amount of time with just 1 cook, than have
        someone blow the lab. (If you see me in game, I am the designated cook.
        Only exception is if I am in custody.){" "}
      </p>
      <p className="info">
        If multiple people will cook, then have just 1 person cook per batch.
        Confusion is minimized, and you will know what the last ingredient is
        before Bain says what to add, thereby speeding up the cook. (Once again,
        Only players who know the lines are to be cooks.)
      </p>
      <p className="info">
        There are 5 sets of planks in this Heist; If you have an upstairs lab,
        Barricade the back room with two and use the remaining three as you
        wish. With a downstairs lab, My recommendation is to place one on the
        window next to the stove. The remaining can be used how you wish.
      </p>
      <p className="info">
        Refrain from using Grenades. In nearly any circumstance, refrain from
        using grenades. Not only do you destroy nearly all of the homes
        barricades, you also do severe damage to any teammates in the blast
        radius.
      </p>
      <p className="info">
        With an upstairs lab, focus on fighting within the stairs/bathroom,
        retreating to the back room if needed. If the lab is downstairs, fight
        around the Bathroom.
      </p>
      <p className="info">
        Ignore the power. Get used to using a Flashlight, or get used to it
        being dark. Whether or not you break the light bulbs is up to you.
      </p>
      <p className="info">
        The Helicopter can do 1 of 2 things; It can deploy a Bulldozer, or spawn
        Yellow SWAT on the balcony. If hovering behind the home, A Bulldozer
        will deploy from the Helicopter. If hovering above the home, it will
        spawn Yellow SWAT on the balcony.
      </p>

      <LinkContainer to="/dialogue">
        <section className="container">
          <button data-hover="View Dialogue">
            <div>Cook Off Bain's Dialogues</div>
          </button>
        </section>
      </LinkContainer>
    </div>
  );
}

export default App;
