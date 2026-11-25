import EffectCounter from "./EffectCounter";
import UserFetch from "./UserFetch";
import WindowSize from "./WindowSize";
import ThemeToggle from "./ThemeToggle";
import FetchPostList from "./FetchPostList";
import HookPostList from "./HookPostList";
import StatePostList from "./StatePostList";
import Settings from "./Settings";
import Modal from "./Modal";
import SignupForm from "./SignupForm";

function Week9Demo() {
  return (
    <div>
      <h2>17.1 useEffect</h2>
      <EffectCounter />
      <UserFetch userId={1} />
      <WindowSize />
      <ThemeToggle />
      <h2>17.2 Fetching</h2>
      <FetchPostList />
      <HookPostList />
      <h2>17.4 Loading and error states</h2>
      <StatePostList />
      <h2>18.1 Custom hooks</h2>
      <Settings />
      <Modal />
      <SignupForm />
    </div>
  );
}

export default Week9Demo;